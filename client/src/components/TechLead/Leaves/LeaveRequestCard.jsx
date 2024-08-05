// src/LeaveRequestCard.js
import React from "react";

const LeaveRequestCard = ({ leave, onApprove, onReject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {leave.employee}
      </h2>
      <p className="text-gray-600 mb-2">
        Leave Type: <span className="font-semibold">{leave.leaveType}</span>
      </p>
      <p className="text-gray-600 mb-2">
        Start Date:{" "}
        <span className="font-semibold">
          {new Date(leave.startDate).toLocaleDateString()}
        </span>
      </p>
      <p className="text-gray-600 mb-4">
        End Date:{" "}
        <span className="font-semibold">
          {new Date(leave.endDate).toLocaleDateString()}
        </span>
      </p>
      <p
        className={`text-sm font-semibold ${
          leave.status === "Pending"
            ? "text-yellow-500"
            : leave.status === "Approved"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        Status: <span className="font-semibold">{leave.status}</span>
      </p>
      {leave.status === "Pending" && (
        <div className="flex justify-between mt-4">
          <button
            onClick={onApprove}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300"
          >
            Approve
          </button>
          <button
            onClick={onReject}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaveRequestCard;
