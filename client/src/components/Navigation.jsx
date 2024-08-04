import React, { useState, useEffect, useRef } from "react";
import { LuLogOut } from "react-icons/lu";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import MobileSidebar from "../admin/Sidebar/MobileSidebar"; // Import MobileSidebar

const Navigation = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <>
      <div className="h-[58px]">
        <nav className="flex fixed bg-white top-0 px-8 py-1 items-center w-full shadow-md border-b-[1px] justify-between z-50">
          <LuMenu
            size={25}
            className="nav-toggle  cursor-pointer"
            onClick={toggleSidebar}
          />
          <Link to="">
            <img
              className="w-[130px] nav-logo"
              src="https://deftsoft.com/assets/images/deft-logo2.svg"
              alt=""
            />
          </Link>
          <div className="nav-btn flex gap-8">
            <SideDrawer />
            <LuLogOut
              size={40}
              className="logout-icon rounded-full p-1 hover:bg-rose-300 transition duration-300 cursor-pointer"
            />
          </div>
        </nav>
      </div>
      <div ref={sidebarRef}>
        <MobileSidebar isVisible={isSidebarVisible} onLinkClick={() => setIsSidebarVisible(false)} /> {/* Pass state as prop */}
      </div>
    </>
  );
};

export default Navigation;
