import Cart from "./layouts/cart/cart";
import Edit from "./layouts/edit/edit";
import Login from "./layouts/login/login";
import Products from "./layouts/products/products";

const routes = [
  // {
  //   path: "/products/",
  //   name: "Товары",
  //   Component: Products
  // },
  {
    path: "/products/:productId?",
    name: "Товары",
    Component: Products,
    display: false
  },
  {
    path: "/edit/:productId?",
    name: "Редактировать",
    Component: Edit,
    display: false
  },
  // {
  //   path: "/edit/",
  //   name: "Редактировать",
  //   Component: Edit
  // },
  { path: "/login", name: "Профиль", Component: Login },
  { path: "/cart", name: "Корзина", Component: Cart }
];

export default routes;
