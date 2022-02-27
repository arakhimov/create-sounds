import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";
import { isOutDate } from "../utils/isOutDate";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    entities: [],
    isLoading: true,
    errors: null,
    lastFetch: null
  },
  reducers: {
    categoriesRequiested: (state) => {
      state.isLoading = true;
    },
    categoriesReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
      state.lastFetch = Date.now();
    },
    categoriesRequestFailed: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    }
  }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequiested, categoriesReceived, categoriesRequestFailed } =
  actions;

// инициализация списка категорий в state
export const loadCategorisList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().categories;
  if (isOutDate(lastFetch)) {
    dispatch(categoriesRequiested());
    try {
      const content = await categoryService.get();
      dispatch(categoriesReceived(content));
    } catch (error) {
      dispatch(categoriesRequestFailed(error.message));
    }
  }
};

// получение категорий
export const getCategories = () => (state) => state.categories.entities;

// получение статуса категорий
export const getCategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;

// получение категории по id
export const getCategoryById = (catId) => (state) =>
  state.categories.entities.find((category) => category.categoryId === catId);

export default categoriesReducer;
