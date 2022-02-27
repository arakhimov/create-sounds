/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import { generateAuthError } from "../utils/generateAuthError";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
  ? {
      currentUser: null,
      isLoading: false,
      errors: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true
    }
  : {
      currentUser: null,
      isLoading: false,
      errors: null,
      auth: null,
      isLoggedIn: false
    };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authRequested: (state) => {
      state.errors = null;
      state.isLoading = true;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.auth = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.errors = action.payload;
    },
    currentUserRecieved: (state, action) => {
      state.currentUser = action.payload;
    },
    userLogout: (state) => {
      state.auth = null;
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorageService.removeAuthData();
    },
    updateCurrentUserData: (state, action) => {
      const currentUserIndex = state.entities.findIndex(
        (user) => user._id === action.payload._id
      );
      state.entities[currentUserIndex] = {
        ...state.entities[currentUserIndex],
        ...action.payload
      };
    }
  }
});

const updateCurrentUserDataRequested = createAction(
  "users/updateCurrentUserDataRequested"
);
const updateCurrentUserDataRequestFailed = createAction(
  "users/updateCurrentUserDataRequest"
);
const currentUserRequested = createAction("users/currentUserRequested");
const currentUserRequestFailed = createAction("users/currentUserRequestFailed");

const { reducer: usersReducer, actions } = usersSlice;
const {
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  userLogout,
  updateCurrentUserData,
  currentUserRecieved
} = actions;

export const loadCurrentUserData = () => async (dispatch) => {
  if (!localStorageService.getAccessToken()) {
    return;
  }
  dispatch(currentUserRequested());
  try {
    const content = await userService.getCurrentUser();
    dispatch(currentUserRecieved(content));
  } catch (error) {
    dispatch(currentUserRequestFailed());
  }
};

export const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password, ...rest });
      dispatch(authRequestSuccess({ userId: data.user }));
      localStorageService.setTokens({ ...data, userId: data.user });
      dispatch(loadCurrentUserData());
      history.push("/products");
    } catch (error) {
      const { message, code } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const { data } = await authService.login(payload);
      localStorageService.setTokens({ ...data, userId: data.user });
      dispatch(authRequestSuccess({ userId: data.user }));
      dispatch(loadCurrentUserData());
      history.push(redirect);
    } catch (error) {
      const { message, code } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const logOut = () => (dispatch) => {
  dispatch(userLogout());
};

export const updateUser = (payload) => async (dispatch) => {
  dispatch(updateCurrentUserDataRequested());
  try {
    const { content } = await userService.updateUser(payload);
    dispatch(updateCurrentUserData(content));
  } catch (error) {
    dispatch(updateCurrentUserDataRequestFailed());
  }
};

export const getCurrenUserData = () => (state) => state.users.currentUser;

export const getAuthStatus = () => (state) => state.users.auth;

export const getAuthError = () => (state) => state.users.errors;

export const getIsloggedInStaus = () => (state) => state.users.isLoggedIn;

export default usersReducer;
