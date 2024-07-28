import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="w-52">
        <div className="fixed left-0 h-screen border-r-2 border-gray-200">
          <div className="h-full pl-2 pt-5 w-48">
            <ul className="space-y-2 font-medium flex flex-col justify-center ">
              <li className="w-44">
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg ${
                      isActive ? "bg-gray-200 dark:text-black" : "text-gray-900"
                    } hover:bg-gray-200 dark:hover:text-gray-700 group`
                  }
                >
                  <AiFillPieChart className="w-5 h-5 text-gray-800" />
                  <span className="ms-3">Dashboard</span>
                </NavLink>
              </li>
              <li className="w-44">
                <NavLink
                  to="task"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg ${
                      isActive ? "bg-gray-200 dark:text-black" : "text-gray-900"
                    } hover:bg-gray-200 dark:hover:text-gray-700 group`
                  }
                >
                  <MdOutlineTaskAlt className="w-5 h-5 text-gray-800" />
                  <span className="ms-3">Task</span>
                </NavLink>
              </li>
              <li className="w-44">
                <NavLink
                  to="todo"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg ${
                      isActive ? "bg-gray-200 dark:text-black" : "text-gray-900"
                    } hover:bg-gray-200 dark:hover:text-gray-700 group`
                  }
                >
                  <LuListTodo className="w-5 h-5 text-gray-800" />
                  <span className="ms-3">TODO</span>
                </NavLink>
              </li>
              <li className="w-44">
                <NavLink
                  to="leaves"
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg ${
                      isActive ? "bg-gray-200 dark:text-black" : "text-gray-900"
                    } hover:bg-gray-200 dark:hover:text-gray-700 group`
                  }
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
                      isActive ? "bg-gray-200 dark:text-black" : "text-gray-900"
                    } hover:bg-gray-200 dark:hover:text-gray-700 group`
                  }
                >
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-800" />
                  <span className="ms-3">Calender</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
