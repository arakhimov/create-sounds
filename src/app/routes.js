import AddProduct from "./layouts/addProduct/addProduct";
import Cart from "./layouts/cart/cart";
import Login from "./layouts/login/login";
import Products from "./layouts/products/products";

const routes = [
  { path: "/add", name: "add", component: AddProduct },
  {
    path: "/products/:productsId?/:isEdit?",
    name: "products/:productsId/:",
    component: Products,
    display: false
  },
  { path: "/login", name: "login", component: Login },
  { path: "/cart", name: "cart", component: Cart }
];

export default routes;
