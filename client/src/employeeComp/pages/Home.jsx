import React from "react";
import Sidebar from "../Sidebar";
import Dashboard from "../employeeComp/Dashboard";
import Navigation from "../../components/Navigation";

function Home() {
  return (
    <div>
        <Navigation/>
      <div className="flex w-full">
        <div className="w-1/5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
