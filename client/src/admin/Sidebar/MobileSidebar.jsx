import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { FaRegCalendarAlt, FaUsersCog, FaTimes } from "react-icons/fa"; // Import FaTimes for the close icon

function MobileSidebar({ isVisible, onLinkClick }) {
  return (
    <div
      className={`MobileSidebar w-80 absolute z-10 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed left-0 border-r-2 pb-4 border-gray-200 bg-gradient-to-r from-fuchsia-200 from-10% via-purple-200 via-40% to-pink-200 to-95% rounded-e-xl w-60 drop-shadow-2xl">
        <button 
          className="absolute top-0 right-0 p-2"
          onClick={onLinkClick}
        >
          <FaTimes className="text-gray-800 hover:text-rose-600" size={24} />
        </button>
        <div className="pl-2 pt-8 w-48">
          <ul className="space-y-2 font-medium flex flex-col justify-center items-center">
            <li className="w-44">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-300 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-300 dark:hover:text-gray-700 group`
                }
                end
                onClick={onLinkClick} // Close sidebar on link click
              >
                <AiFillPieChart className="w-5 h-5 text-gray-800" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li className="w-44">
              <NavLink
                to="employees"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-300 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-300 dark:hover:text-gray-700 group`
                }
                onClick={onLinkClick} // Close sidebar on link click
              >
                <FaUsersCog className="w-5 h-5 text-gray-800" />
                <span className="ms-3">Employees</span>
              </NavLink>
            </li>
            <li className="w-44">
              <NavLink
                to="leaves"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-300 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-300 dark:hover:text-gray-700 group`
                }
                onClick={onLinkClick} // Close sidebar on link click
              >
                <BiSolidCalendarExclamation className="w-5 h-5 text-gray-800" />
                <span className="ms-3">Leaves</span>
              </NavLink>
            </li>
            <li className="w-44">
              <NavLink
                to="calender"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-300 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-300 dark:hover:text-gray-700 group`
                }
                onClick={onLinkClick} // Close sidebar on link click
              >
                <FaRegCalendarAlt className="w-5 h-5 text-gray-800" />
                <span className="ms-3">Calender</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
