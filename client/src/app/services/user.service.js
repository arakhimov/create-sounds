import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndPoint = "user/";

const userService = {
  createUser: async (payload) => {
    console.log(payload);
    const data = await httpService.post(userEndPoint, {
      ...payload
    });

    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndPoint + localStorageService.getUserId()
    );

    return data;
  },
  updateUser: async (payload) => {
    const { data } = await httpService.put(userEndPoint + payload._id, {
      ...payload
    });

    return data;
  }
};

export default userService;
