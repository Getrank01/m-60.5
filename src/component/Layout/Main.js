import React from "react";
import { Outlet } from "react-router-dom";
import Carousal from "../Carousal/Carousal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Carousal></Carousal>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
