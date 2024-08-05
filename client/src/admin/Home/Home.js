import React from "react";
import Navigation from "../../components/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../Sidebar/MobileSidebar";

function Home() {
  return (
    <>
      <Navigation />
      <div className="flex ">
        <div className="">
          <Sidebar />
          <MobileSidebar/>
        </div>
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
