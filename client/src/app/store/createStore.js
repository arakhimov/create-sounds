import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../store/categories";
import cartReducer from "./cart";
import commentsReducer from "./comments";
import productsReducer from "./products";
import usersReducer from "./users";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  comments: commentsReducer,
  users: usersReducer,
  cart: cartReducer
});

export function createStore() {
  return configureStore({ reducer: rootReducer });
}
