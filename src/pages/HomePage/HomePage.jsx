/* import { useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import { selectIsLoading } from "../../redux/contacts/selectors"; */
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <h2 className={css.titleMain}>MY PHONEBOOK</h2>
      <div className={css.container}>
        <div className={css.wrapperHome}>
          <p className={css.titleHome}>Wellcome to HomePage</p>
        </div>
        <div className={css.wrapperApp}>
          <p className={css.titleApp}>Please Enter in Your App</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
