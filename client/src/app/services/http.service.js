import axios from "axios";
import configFile from "../config.json";
import authService from "./auth.service";
import localStorageService from "./localStorage.service";

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(async function (config) {
  // обновление refreshToken
  const expiresInDate = localStorageService.getExpiresIn();
  const refreshToken = localStorageService.getRefreshToken();
  if (refreshToken && expiresInDate < Date.now()) {
    const data = authService.refresh();
    localStorageService.setTokens(data);
  }

  // устанавливаем дополнительный параметр для проверки наличия авторизации
  const accessToken = localStorageService.getAccessToken();
  if (accessToken) {
    config.params = {
      ...config.params,
      Autorization: `Bearer ${accessToken}`
    };
  }

  return config;
});

const httpService = {
  get: http.get,
  post: http.post,
  patch: http.patch,
  delete: http.delete,
  put: http.put
};

export default httpService;
