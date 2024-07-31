import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildLinkKlass = ({ isActive }) => {
  return `${css.link} ${isActive ? css.active : ""}`;
};

const AuthNav = () => {
  return (
    <nav className={css.navForm}>
      <NavLink to="/register" className={buildLinkKlass}>
        Registr
      </NavLink>
      <NavLink to="/login" className={buildLinkKlass}>
        Log in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
