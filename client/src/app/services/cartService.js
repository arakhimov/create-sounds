import httpService from "./http.service";

const cartEndpoint = "cart/";

const cartService = {
  get: async () => {
    const { data } = await httpService.get(cartEndpoint);

    return data;
  },
  add: async (payload) => {
    const { data } = await httpService.post(cartEndpoint, payload);

    return data;
  },
  remove: async (productId) => {
    const { data } = await httpService.delete(cartEndpoint + productId);

    return data;
  }
};

export default cartService;
