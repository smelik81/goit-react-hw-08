import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkKlass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={buildLinkKlass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildLinkKlass}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
