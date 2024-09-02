import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Leaves = () => {
  return (
    <>
      <div>
        <div className="bg-blue-500 p-4 font-semibold text-white">Leaves</div>
        <div className="bg-gray-200 flex gap-8 p-4">
          {/* Updated NavLink paths to be relative */}
          <NavLink to="applyleaves" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>Apply</NavLink>
          <NavLink to="myleave" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>My Leave</NavLink>
          <NavLink to="entitlement" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>Entitlement</NavLink>
          <NavLink to="report" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>Reports</NavLink>
        </div>
        <div className="mt-4">
          {/* <Apply /> removed, relying on Outlet to render nested routes */}
        </div>
        <Outlet />
      </div>
    </>
  );
};
