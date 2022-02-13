import Cart from "./layouts/cart/cart";
import Edit from "./layouts/edit/edit";
import Login from "./layouts/login/login";
import Products from "./layouts/products/products";

const routes = [
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
  { path: "/login/:type?", name: "Профиль", Component: Login, display: false },
  { path: "/cart", name: "Корзина", Component: Cart }
];

export default routes;
