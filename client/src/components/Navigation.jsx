import React from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="h-[58px]">
        <nav className="flex fixed bg-white top-0 px-8 py-1 items-center w-full  shadow-md border-b-[1px] justify-between z-50 ">
          <Link to="">
            <img
              className="w-[130px] "
              src="https://deftsoft.com/assets/images/deft-logo2.svg"
              alt=""
            />
          </Link>
          <div className="flex gap-8">
            <SideDrawer />
            <LuLogOut
              size={40}
              className=" rounded-full p-1 hover:bg-rose-300 transition duration-300 cursor-pointer"
            />
          </div>
        </nav>
      </div>
    </>

    // <nav className="fixed top-0 left-0 right-0 flex px-8 items-center w-full h-[60px] shadow-md border-b-[1px] justify-between bg-white z-50">
    //   <img
    //     className="w-[130px]"
    //     src="https://deftsoft.com/assets/images/deft-logo2.svg"
    //     alt=""
    //   />
    //   <div className="flex gap-8">
    //     <SideDrawer />
    //     <LuLogOut size={35} />
    //   </div>
    // </nav>
  );
};

export default Navigation;
