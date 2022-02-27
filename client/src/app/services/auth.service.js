import axios from "axios";
import config from "../config.json";
import localStorageService from "./localStorage.service";

// TO DO baseURL
const httpAuth = axios.create({
  baseURL: config.apiEndpoint + "auth/"
});

const authService = {
  register: async (payload) => {
    const { data } = await httpAuth.post("signUp", {
      ...payload,
      returnSecureToken: true
    });

    return data;
  },
  login: async ({ email, password }) => {
    const data = await httpAuth.post("signInWithPassword", {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grandType: "refreshToken",
      refreshToken: localStorageService.getRefreshToken()
    });

    return data;
  }
};

export default authService;
