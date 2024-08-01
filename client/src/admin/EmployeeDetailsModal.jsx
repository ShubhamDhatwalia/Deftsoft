import React from "react";
import { FaTimes } from "react-icons/fa"; // Import cross icon

function EmployeeDetailsModal({ employee, isOpen, onClose }) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-96 relative">
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

        <p><strong>First Name:</strong> {employee.firstName}</p>
        <p><strong>Last Name:</strong> {employee.lastName}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Mobile:</strong> {employee.mobile}</p>
        <p><strong>Designation:</strong> {employee.designation}</p>
        <p><strong>DOB:</strong> {employee.startDate ? employee.startDate.toDateString() : 'N/A'}</p>
        <p><strong>Address:</strong> {employee.address}</p>
        
      </div>
    </div>
  );
}

export default EmployeeDetailsModal;
