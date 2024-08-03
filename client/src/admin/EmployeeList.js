import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { MdMoreVert } from "react-icons/md";

function EmployeeList({ employees, deleteEmployee, onEdit, openDetailsModal }) {
  const [visibleIcons, setVisibleIcons] = useState(null);
  
  
  

  return (
    <div
      className="mt-5 rounded-xl h-[450px] overflow-y-auto"
      
    >
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
            <p className="font-medium text-lg w-[165px] overflow-hidden">
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

            {visibleIcons === index && (
              <div
                
                className="icons-container absolute right-0 bg-yellow-400 drop-shadow-lg rounded-xl p-2 flex flex-col gap-1 z-10"
                onMouseEnter={() => setVisibleIcons(index)}
                onMouseLeave={() => setVisibleIcons(null)}
              >
                <div className="flex gap-2 items-center justify-center">
                  <IoIosMail size={25} className="email-icon hover:cursor-pointer hover:scale-125" />
                  <GrFormView
                    size={35}
                    className="hover:cursor-pointer hover:text-green-600 hover:scale-125"
                    onClick={() => openDetailsModal(employee)}
                  />
                </div>
                <div className="flex items-center justify-center gap-4">
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
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
