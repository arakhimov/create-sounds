const ACCESS_KEY = "jwt-access-token";
const REFRESH_KEY = "jwt-refresh-key";
const EXPIRES_KEY = "jwt-experesIn";
const USERID_KEY = "user-local-id";
const MS_PER_SECONDS = 1000;

export function setTokens({
  expiresIn = 3600,
  accessToken,
  refreshToken,
  userId
}) {
  const expiresInData = Date.now() + expiresIn * MS_PER_SECONDS;
  localStorage.setItem(ACCESS_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresInData);
  localStorage.setItem(USERID_KEY, userId);
}

const getAccessToken = () => localStorage.getItem(ACCESS_KEY);
const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);
const getExpiresIn = () => localStorage.getItem(EXPIRES_KEY);
const getUserId = () => localStorage.getItem(USERID_KEY);
const getCartproducts = () => localStorage.getItem("create-sound-cart");
const setCartproducts = (data) =>
  localStorage.setItem("create-sound-cart", data);

function removeAuthData() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem("create-sound-cart");
}

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getExpiresIn,
  getUserId,
  removeAuthData,
  getCartproducts,
  setCartproducts
};

export default localStorageService;
