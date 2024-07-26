import React from "react";
import Navigation from "../components/Navigation";
import Sidenav from "../components/TechLead/Sidenav/Sidenav";
import Dashboard from "../components/TechLead/Dashboard/Dashboard";

const TL = () => {
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="w-full grid grid-cols-7">
        <div className="col-span-1 border min-h-[538px]">
          <Sidenav />
        </div>
        <div className="col-span-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default TL;
