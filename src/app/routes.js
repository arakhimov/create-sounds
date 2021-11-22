import AddPage from "./pages/addPage/addPage";
import CartPage from "./pages/cartPage/cartPage";
import CatalogPage from "./pages/catalogPage/catalogPage";
import EditPage from "./pages/editPage/editPage";
import LoginPage from "./pages/loginPage/loginPage";

const routes = [
  { path: "/add", name: "Add", component: AddPage },
  { path: "/cart", name: "Cart", component: CartPage },
  { path: "/catalog", name: "catalog", component: CatalogPage },
  { path: "/edit/:id", name: "Edit", component: EditPage },
  { path: "/login", name: "Login", component: LoginPage }
];

export default routes;
