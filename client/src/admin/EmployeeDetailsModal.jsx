import React from "react";
import { FaTimes } from "react-icons/fa"; // Import cross icon

function EmployeeDetailsModal({ employee, isOpen, onClose }) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-[450px] relative">
        {/* Close Icon */}
        <button
          className="absolute top-5 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 ">Employee Details</h2>

        {/* Centered Image */}
        {employee.imageSrc && (
          <div className="flex justify-center mb-4">
            <img
              src={employee.imageSrc}
              alt="Profile"
              className="h-20 w-20 rounded-full border-2 border-slate-100"
            />
          </div>
        )}

        <div className="flex-col ">
          <div className="flex items-center gap-2 mb-2">
            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>
                {employee.firstName} {employee.lastName}
              </strong>
            </p>
            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>ID: </strong> {employee.id}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>Mobile:</strong> {employee.mobile}
            </p>

            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>Role: </strong> {employee.designation}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>DOB:</strong>{" "}
              {employee.startDate ? employee.startDate.toDateString() : "N/A"}
            </p>

            <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap">
              <strong>Join: </strong>{" "}
              {employee.startDate ? employee.startDate.toDateString() : "N/A"}
            </p>
          </div>

          <p className="bg-blue-200 rounded-xl px-3 py-2 w-full whitespace-nowrap mb-2">
            <strong>Email:</strong> {employee.email}
          </p>

          <p className="bg-blue-200 rounded-xl px-3 py-2 w-full  ">
            <strong>Address:</strong> {employee.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetailsModal;
