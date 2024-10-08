import React from "react";
import Navigation from "../../components/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Navigation />
      <div className="flex">
        <div className="w-52">
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
