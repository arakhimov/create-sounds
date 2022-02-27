/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import { createAction, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";
import localStorageService from "../services/localStorage.service";

const productsInCart = JSON.parse(localStorageService.getCartproducts());
const initialState =
  productsInCart && productsInCart.length === 0
    ? {
        entities: [],
        isLoading: false,
        errors: null
      }
    : {
        entities: JSON.parse(localStorageService.getCartproducts()),
        isLoading: false,
        errors: null
      };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequested: (state) => {
      state.isLoading = true;
    },
    cartRecieved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    cartRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    cartProductAdded: (state, action) => {
      state.entities = action.payload;
    },
    cartProductRemoved: (state, action) => {
      state.entities = action.payload;
    },
    cartCleaned: (state) => {
      state.entities = [];
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
export const {
  cartRequested,
  cartRecieved,
  cartRequestFailed,
  cartProductAdded,
  cartProductRemoved,
  cartCleaned
} = actions;

const cartProductAddRequest = createAction("cart/cartProductAddRequest");
const cartProductAddRequestFailed = createAction(
  "cart/cartProductAddRequestFailed"
);
const cartProductRemoveRequest = createAction("cart/cartProductRemoveRequest");
const cartProductRemoveRequestFailed = createAction(
  "cart/cartProductRemoveRequestFailed"
);
const cartCleanRequested = createAction("cart/cartCleanRequested");
const cartCleanRequestFailed = createAction("cart/cartCleanRequestFailed");

// загрузка списка товаров в корзине
export const loadCartList = (userId) => async (dispatch) => {
  dispatch(cartRequested());
  try {
    const content = await cartService.get();
    dispatch(cartRecieved(content));
  } catch (error) {
    dispatch(cartRequestFailed(error.message));
  }
};

// добавление продукта в корзину
export const addProduct = (data) => async (dispatch) => {
  dispatch(cartProductAddRequest());
  try {
    const localCart = JSON.parse(localStorageService.getCartproducts());
    const newProduct = { productId: data._id, product: data, amount: 1 };
    // проверяем есть ли уже такой инструмент в корзине
    // если есть увеличиваем количество
    const productIndex = localCart.findIndex(
      (product) => product.productId === data._id
    );
    if (productIndex === -1) {
      localCart.push(newProduct);
    } else {
      localCart[productIndex].amount++;
    }
    localStorageService.setCartproducts(JSON.stringify(localCart));
    dispatch(cartProductAdded(localCart));
  } catch (error) {
    dispatch(cartProductAddRequestFailed(error.message));
  }
};

// удаление продукта из корзины
export const removeProduct = (productId) => async (dispatch) => {
  dispatch(cartProductRemoveRequest());
  try {
    const localCart = JSON.parse(localStorageService.getCartproducts());
    const updateCart = localCart.filter(
      (product) => product.productId !== productId
    );
    localStorageService.setCartproducts(JSON.stringify(updateCart));
    dispatch(cartProductRemoved(updateCart));
  } catch (error) {
    dispatch(cartProductRemoveRequestFailed(error.message));
  }
};

// измениние количества инструментов в корзине
export const changeProductAmount = (productId, method) => async (dispatch) => {
  dispatch(cartProductRemoveRequest());
  try {
    const localCart = JSON.parse(localStorageService.getCartproducts());
    const productIndex = localCart.findIndex(
      (product) => product.productId === productId
    );
    if (method === "add") {
      localCart[productIndex].amount++;
    } else {
      localCart[productIndex].amount--;
    }
    localStorageService.setCartproducts(JSON.stringify(localCart));
    dispatch(cartProductRemoved(localCart));
  } catch (error) {
    dispatch(cartProductRemoveRequestFailed(error.message));
  }
};

// очищение корзины
export const cleanCart = () => async (dispatch) => {
  dispatch(cartCleanRequested());
  try {
    localStorageService.setCartproducts(JSON.stringify([]));
    dispatch(cartCleaned());
  } catch (error) {
    dispatch(cartCleanRequestFailed(error.message));
  }
};

// получение количества товаров в корзине
export const getCartAmount = () => (state) => {
  return state.cart.entities?.reduce((acc, val) => acc + val.amount, 0) || 0;
};

// получение итоговой стоимости товаров в корзине
export const getCartSummaryCost = () => (state) => {
  return state.cart.entities?.reduce(
    (acc, val) => acc + val.amount * val.product.cost,
    0
  );
};

// получение товаров из корзины
export const getCartProducts = () => (state) => state.cart.entities;

// получение статуса загрузки корзины
export const getCartLoadStatus = () => state.cart.isLoading;

export default cartReducer;
