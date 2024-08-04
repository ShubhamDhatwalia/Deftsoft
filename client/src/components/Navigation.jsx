import React from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Navigation = () => {
  return (
    <>
      <div className="h-[58px]">
        <nav className="flex fixed bg-white top-0 px-8 py-1 items-center w-full  shadow-md border-b-[1px] justify-between z-50 ">
          
          
        <LuMenu size={25} className="hidden nav-toggle"/>
          
          <Link to="">
            <img
              className="w-[130px] nav-logo"
              src="https://deftsoft.com/assets/images/deft-logo2.svg"
              alt=""
            />
          </Link>
          <div className=" nav-btn flex gap-8">
            <SideDrawer />
            <LuLogOut
              size={40}
              className=" logout-icon rounded-full p-1 hover:bg-rose-300 transition duration-300 cursor-pointer"
            />
          </div>
        </nav>
      </div>
    </>

  
  );
};

export default Navigation;
