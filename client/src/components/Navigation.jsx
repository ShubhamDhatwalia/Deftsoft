import React from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";

const Navigation = () => {
  return (
    <nav className="flex px-8 items-center w-full h-[60px] shadow-md border-b-[1px] justify-between">
      <img
        className="w-[130px]"
        src="https://deftsoft.com/assets/images/deft-logo2.svg"
        alt=""
      />
      <div className="flex gap-8">
        <SideDrawer />
        <LuLogOut size={35} />
      </div>
    </nav>
  );
};

export default Navigation;
