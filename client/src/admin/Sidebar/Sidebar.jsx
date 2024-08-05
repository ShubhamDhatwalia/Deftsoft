import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";


function Sidebar() {
  return (
    <div className="sidebar w-48">
      <div className="fixed left-0 h-screen border-r-2 border-gray-200">
        <div className="h-full pl-2 pt-5 w-48">
          <ul className="space-y-4 font-medium flex flex-col justify-center">
            <li className="w-44">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-200 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-200 dark:hover:text-gray-700 group`
                }
                end // Ensure this is active only when the exact path matches
              >
                <AiFillPieChart className="w-5 h-5 text-gray-800" />
                <span className="ms-3 text-lg">Dashboard</span>
              </NavLink>
            </li>
            {/* <li className="w-44">
              <NavLink
                to="task"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-200 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-200 dark:hover:text-gray-700 group`
                }
              >
                <MdOutlineTaskAlt className="w-5 h-5 text-gray-800" />
                <span className="ms-3 text-lg">Task</span>
              </NavLink>
            </li> */}
            <li className="w-44">
              <NavLink
                to="employees"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-200 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-200 dark:hover:text-gray-700 group`
                }
              >
                <FaUsersCog className="w-6 h-6 text-gray-800" />
                <span className="ms-2 text-lg">Employees</span>
              </NavLink>
            </li>
            <li className="w-44">
              <NavLink
                to="leaves"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-200 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-200 dark:hover:text-gray-700 group`
                }
              >
                <BiSolidCalendarExclamation className="w-5 h-5 text-gray-800" />
                <span className="ms-3 text-lg">Leaves</span>
              </NavLink>
            </li>
            <li className="w-44">
              <NavLink
                to="calender"
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg ${
                    isActive ? "bg-blue-200 dark:text-black" : "text-gray-900"
                  } hover:bg-blue-200 dark:hover:text-gray-700 group`
                }
              >
                <FaRegCalendarAlt className="w-5 h-5 text-gray-800" />
                <span className="ms-3 text-lg">Calender</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
