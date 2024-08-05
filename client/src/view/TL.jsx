import React from "react";
import Navigation from "../components/Navigation";
import Sidenav from "../components/Sidenav/Sidenav";
import Home from "../components/Home/Home";

const TL = () => {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <div className="pt-[60px] w-full grid grid-cols-7">
        <div className="col-span-1 border min-h-[538px]">
          <Sidenav />
        </div>
        <div className="col-span-6">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default TL;
