import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdDeleteForever, MdMoreVert } from "react-icons/md";
import { GrFormView } from "react-icons/gr";

function EmployeeList({ employees, deleteEmployee, onEdit, openDetailsModal }) {
  const [visibleIcons, setVisibleIcons] = useState(null);

  return (
    <div className="employee-list mt-5  rounded-xl overflow-y-auto ">
      {employees.map((employee, index) => (
        <div
          key={index}
          className="employee-item flex justify-between items-center border-b-2 border-blue-200 hover:bg-blue-200 p-2 relative group"
        >
          <div className="flex justify-center items-center gap-4">
            <img
              src={employee.imageSrc || "../assets/images/avatar.png"}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            />
            <p className="font-medium text-lg whitespace-normal">
              {employee.firstName} {employee.lastName}
            </p>
          </div>

          <div className="relative">
            <MdMoreVert
              size={30}
              className="hover:cursor-pointer"
              onMouseEnter={() => setVisibleIcons(index)}
              onMouseLeave={() => setVisibleIcons(null)}
            />

            <div
              className={`icons-container absolute right-6 -bottom-1 bg-yellow-400 drop-shadow-lg rounded-xl px-2 flex gap-1 z-10 transition-all duration-300 ${
                visibleIcons === index
                  ? "opacity-100 w-[123px]"
                  : "opacity-0 w-0"
              } overflow-hidden`}
              onMouseEnter={() => setVisibleIcons(index)}
              onMouseLeave={() => setVisibleIcons(null)}
            >
              <div className="flex gap-1 items-center justify-center">
                <IoIosMail
                  size={25}
                  className="email-icon hover:cursor-pointer hover:scale-125"
                />
                <GrFormView
                  size={35}
                  className="hover:cursor-pointer hover:text-green-600 hover:scale-125"
                  onClick={() => openDetailsModal(employee)}
                />
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaPencilAlt
                  size={19}
                  className="hover:cursor-pointer hover:text-blue-700 hover:scale-125"
                  onClick={() => onEdit(employee)}
                />
                <MdDeleteForever
                  size={24}
                  className="hover:cursor-pointer hover:text-rose-600 hover:scale-125"
                  onClick={() => deleteEmployee(index)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
