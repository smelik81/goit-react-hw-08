import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userContainer}>
      <h2 className={css.title}>Welcome, {user.name}</h2>
      <button type="button" onClick={handleLogout} className={css.btnLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
