import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.mainContainer}>
      <AppBar />
      <Suspense fallback={<div className={css.layoutLoading}>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
