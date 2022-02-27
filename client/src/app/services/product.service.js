import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
  getProductList: async () => {
    const { data } = await httpService.get(productEndpoint);
    return data;
  },
  getProductById: async (productId) => {
    const { data } = await httpService.get(productEndpoint + productId);

    return data;
  },
  removeProduct: async (productId) => {
    const { data } = await httpService.delete(productEndpoint + productId);

    return data;
  },
  updateProduct: async (payload) => {
    const { data } = await httpService.patch(productEndpoint + payload._id, {
      ...payload
    });

    return data;
  },
  createProduct: async (payload) => {
    const { data } = await httpService.post(productEndpoint, {
      ...payload
    });

    return data;
  }
};

export default productService;
