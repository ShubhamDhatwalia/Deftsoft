import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { GrFormView } from "react-icons/gr";

function EmployeeList({ employees, deleteEmployee, onEdit, openDetailsModal }) {
  return (
    <div className="mt-5 rounded-xl h-[450px] overflow-y-auto">
      {employees.map((employee, index) => (
        <div
          key={index}
          className="employee-item flex justify-between items-center border-b-2 border-blue-200 hover:bg-blue-200 p-2 relative group"
        >
          <div className="flex items-center gap-4">
            <img
              src={employee.imageSrc || "../assets/images/avatar.png"}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-medium text-lg">
              {employee.firstName} {employee.lastName}
            </span>
          </div>
          <div className="icons-container flex gap-3 items-center absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100">
            <IoIosMail size={25} className="hover:cursor-pointer" />

            <GrFormView
              size={35}
              className="hover:cursor-pointer"
              onClick={() => openDetailsModal(employee)}
            />

            <FaPencilAlt
              size={19}
              className="hover:cursor-pointer"
              onClick={() => onEdit(employee)}
            />
            <MdDeleteForever
              size={24}
              className="hover:cursor-pointer hover:text-rose-600"
              onClick={() => deleteEmployee(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
