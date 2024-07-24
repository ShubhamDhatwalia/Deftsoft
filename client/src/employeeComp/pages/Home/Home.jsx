import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "../Task";
import TODO from "../TODO";
import Leaves from "../Leaves";
import Calender from "../Calender";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="h-full w-full mt-[75px] pt-5">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/task" element={<Task />} />
              <Route path="/todo" element={<TODO />} />
              <Route path="/leaves" element={<Leaves />} />
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;
