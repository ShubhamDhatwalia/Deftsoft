import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { Apply } from "../EmpComp/LeaveComp/Apply";

export const Leaves = () => {
  return (
    <div>
      <div className="bg-blue-500 p-4 font-semibold text-white">Leaves</div>
      <div className="bg-gray-200 flex gap-8 p-4">
        <NavLink
          to="applyleaves"
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          Apply
        </NavLink>
        <NavLink
          to="myleave"
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          My Leave
        </NavLink>
        <NavLink
          to="entitlement"
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          Entitlement
        </NavLink>
        <NavLink
          to="report"
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          Reports
        </NavLink>
      </div>
      <Outlet /> 
    </div>
  );
};
