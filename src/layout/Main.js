import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Home from "../components/shared/Home/Home";

const Main = () => {
  return (
    <div>
        <Header/>
        {/* <Home/> */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
