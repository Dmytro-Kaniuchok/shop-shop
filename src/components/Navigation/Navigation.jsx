import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.isActive : "")}
      >
        Головна
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? css.isActive : "")}
      >
        Каталог
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? css.isActive : "")}
      >
        Кошик
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? css.isActive : "")}
      >
        Контакти
      </NavLink>
    </nav>
  );
}
