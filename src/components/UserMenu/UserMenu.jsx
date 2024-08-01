import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
