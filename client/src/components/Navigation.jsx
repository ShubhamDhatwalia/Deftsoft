import React from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="h-[75px]">
        <nav className="flex fixed bg-white top-0 px-8 items-center w-full h-[75px] shadow-md border-b-[1px] justify-between">
          <Link to="">
            <img
              className="w-[130px]"
              src="https://deftsoft.com/assets/images/deft-logo2.svg"
              alt=""
            />
          </Link>
          <div className="flex gap-8">
            <SideDrawer />
            <LuLogOut size={35} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
