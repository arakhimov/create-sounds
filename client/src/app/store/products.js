/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { createAction, createSlice } from "@reduxjs/toolkit";
import { orderBy } from "lodash";
import productService from "../services/product.service";
import history from "../utils/history";
import { isOutDate } from "../utils/isOutDate";

const FIRST_PAGE_NUMBER = 1;

const productsSlice = createSlice({
  name: "products",
  initialState: {
    entities: [],
    isLoading: true,
    errors: null,
    lastFetch: null,
    productCategory: null,
    searchField: "",
    sortBy: { iterator: "cost", order: null },
    currentPage: 1,
    filteredProducts: [],
    currentProduct: null
  },
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    productsRecieved: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
      state.filteredProducts = action.payload;
      state.lastFetch = Date.now();
    },
    productsRequestFailed: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    productCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    productRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (product) => product._id !== action.payload
      );
    },
    productUpdated: (state, action) => {
      const updateProductIndex = state.entities.findIndex(
        (product) => product._id === action.payload._id
      );
      state.entities[updateProductIndex] = {
        ...state.entities[updateProductIndex],
        ...action.payload
      };
    },
    // установка выбранной категории
    productCategoryInstalled: (state, action) => {
      state.productCategory = action.payload;
    },
    // установка значения поля ввода строки поиска
    searchFieldInstalled: (state, action) => {
      state.searchField = action.payload;
    },
    // установка номера текущей страницы
    currentPageInstalled: (state, action) => {
      state.currentPage = action.payload;
    },
    // установка типа сортировки
    sortTypeInstalled: (state, action) => {
      state.sortBy = { ...state.sortBy, order: action.payload };
    },
    // фильтрация и сортировка по выбранной категории либо строке поиска
    setProductsFiltered: (state) => {
      state.currentPage = FIRST_PAGE_NUMBER;
      const filteredByCategoryProducts = state.productCategory
        ? state.entities.concat().filter((product) => {
            return product.categories.concat().includes(state.productCategory);
          })
        : state.entities.concat();

      const filteredBySeatchFieldProducts =
        state.searchField !== ""
          ? state.entities.concat().filter((product) => {
              return (
                product.name
                  .toLowerCase()
                  .includes(state.searchField.toLowerCase()) ||
                product._id
                  .toLowerCase()
                  .includes(state.searchField.toLowerCase())
              );
            })
          : state.entities.concat();

      const filteredProducts = state.productCategory
        ? filteredByCategoryProducts
        : filteredBySeatchFieldProducts;

      state.filteredProducts = state.sortBy.order
        ? orderBy(
            filteredProducts,
            [state.sortBy.iterator],
            [state.sortBy.order]
          )
        : filteredProducts;
    },
    // установка выбранного продукта
    currentproductInstalled: (state, action) => {
      state.currentProduct = state.entities.find(
        (product) => product._id === action.payload
      );
    }
  }
});

const productCreateRequested = createAction("products/productCreateRequested");
const productCreateRequestFailed = createAction(
  "products/productCreateRequestFailed"
);
const productRemoveRequested = createAction("products/productRemoveRequested");
const productRemoveRequestFailed = createAction(
  "products/productRemoveRequestFailed"
);
const productUpdateRequested = createAction("products/productUpdateRequested");
const productUpdateRequestFailed = createAction(
  "products/productUpdateRequestFailed"
);

const { reducer: productsReducer, actions } = productsSlice;

const {
  productsRequested,
  productsRecieved,
  productsRequestFailed,
  productCreated,
  productRemoved,
  productUpdated,
  productCategoryInstalled,
  searchFieldInstalled,
  currentPageInstalled,
  sortTypeInstalled,
  setProductsFiltered,
  currentproductInstalled
} = actions;

// получение списка продуктов
export const loadProductsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().products;
  if (isOutDate(lastFetch)) {
    dispatch(productsRequested());
    try {
      const content = await productService.getProductList();
      dispatch(productsRecieved(content));
    } catch (error) {
      dispatch(productsRequestFailed(error.message));
    }
  }
};

// создание нового продукта
export const createProduct = (data) => async (dispatch) => {
  dispatch(productCreateRequested());
  try {
    const content = await productService.createProduct(data);
    dispatch(productCreated(content));
    history.push("/products");
  } catch (error) {
    dispatch(productCreateRequestFailed());
  }
};

// удаление продукта
export const removeProduct = (productId) => async (dispatch) => {
  dispatch(productRemoveRequested());
  try {
    const content = await productService.removeProduct(productId);
    if (content === "") {
      dispatch(productRemoved(productId));
    }
  } catch (error) {
    dispatch(productRemoveRequestFailed());
  }
};

// изменение продукта
export const updateProduct = (payload) => async (dispatch) => {
  dispatch(productUpdateRequested());
  try {
    const content = await productService.updateProduct(payload);
    dispatch(productUpdated(content));
    history.push("/edit");
  } catch (error) {
    dispatch(productUpdateRequestFailed());
  }
};

// получение статуса загрузки продуктов
export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading;

// получение продуктов
export const getProducts = () => (state) => state.products.entities;

// получение отфильтрованных продуктов
export const getFilteredProducts = () => (state) =>
  state.products.filteredProducts;

// получение значения строки поиска
export const getSearchField = () => (state) => state.products.searchField;

// получение номера текущей страницы
export const getCurrentPage = () => (state) => state.products.currentPage;

// получение выбранной категории
export const getCurrentCategory = () => (state) =>
  state.products.productCategory;

// получение продукта по id
export const getProductById = (productId) => (state) => {
  return state.products.entities.find((product) => product._id === productId);
};

// получение выбранного продукта
export const getProductData = () => (state) => state.products.currentProduct;

// установка выбранного продукта
export const setCurrentProduct = (productId) => (dispatch) => {
  dispatch(currentproductInstalled(productId));
};

// установка выбранной категории
export const setProductCategory = (categoryId) => (dispatch) => {
  dispatch(productCategoryInstalled(categoryId));
  dispatch(searchFieldInstalled(""));
  dispatch(currentPageInstalled(FIRST_PAGE_NUMBER));
  dispatch(sortTypeInstalled({ iterator: "cost", order: null }));
  dispatch(setProductsFiltered());
};

// установка поля ввода
export const setSearchField = (value) => (dispatch) => {
  dispatch(searchFieldInstalled(value));
  dispatch(productCategoryInstalled(null));
  dispatch(sortTypeInstalled({ iterator: "cost", order: null }));
  dispatch(setProductsFiltered());
};

// установка номера текущей страницы
export const handleChangeCurrentPage = (page) => (dispatch) => {
  dispatch(currentPageInstalled(page));
};

// установка типа сортировки
export const setSortType = (type) => (dispatch) => {
  dispatch(sortTypeInstalled(type));
  dispatch(setProductsFiltered());
};

export default productsReducer;
