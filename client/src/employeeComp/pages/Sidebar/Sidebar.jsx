import React from "react";
import { Link } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navigation from "../../../components/Navigation";

function Sidebar() {
  return (
    <>
      <div>
        <div className="w-52 h-screen fixed left-0 border-r-2 border-gray-300">
          <div className="h-[75px] block">
            <Navigation />
          </div>
          <div className="h-full pl-2 pt-5">
            <ul className="space-y-2 font-medium flex flex-col justify-center">
              <li className="w-48">
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <AiFillPieChart className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li className="w-48">
                <Link
                  to="/task"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <MdOutlineTaskAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Task</span>
                </Link>
              </li>
              <li className="w-48">
                <Link
                  to="/todo"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <LuListTodo className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">TODO</span>
                </Link>
              </li>
              <li className="w-48">
                <Link
                  to="/leaves"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <BiSolidCalendarExclamation className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Leaves</span>
                </Link>
              </li>
              <li className="w-48">
                <Link
                  to="/calender"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Calender</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
