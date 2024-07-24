import React from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";

export const Navigation = () => {
  return (
    <div className="bg-white fixed top-0 w-full">
      <nav className="flex px-8 items-center h-75px shadow-md border-b-1">
        <img
          className="w-130px"
          src="https://deftsoft.com/assets/images/deft-logo2.svg"
          alt=""
        />
        <div className="flex gap-8 ml-auto">
          <SideDrawer />
          <LuLogOut size={35} />
        </div>
      </nav>
    </div>
  );
};


