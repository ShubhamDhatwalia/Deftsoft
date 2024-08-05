// src/Leaves.js
import React, { useState } from "react";
import LeaveRequestCard from "./LeaveRequestCard";
import AddLeaveForm from "./AddLeaveForm";

const initialLeaves = [
  {
    id: 1,
    employee: "Alice",
    leaveType: "Annual",
    startDate: "2024-08-10",
    endDate: "2024-08-15",
    status: "Pending",
  },
  {
    id: 2,
    employee: "Bob",
    leaveType: "Sick",
    startDate: "2024-08-01",
    endDate: "2024-08-03",
    status: "Approved",
  },
  // Add more initial leave requests as needed
];

const employeeLeaveEntitlements = {
  Alice: 20, // Total annual leave entitlement
  Bob: 15,
};

const Leaves = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [showAddForm, setShowAddForm] = useState(false);

  const addLeaveRequest = (request) => {
    setLeaves([
      ...leaves,
      { ...request, id: leaves.length + 1, status: "Pending" },
    ]);
    setShowAddForm(false);
  };

  const updateLeaveStatus = (id, status) => {
    setLeaves(
      leaves.map((leave) => (leave.id === id ? { ...leave, status } : leave))
    );
  };

  const calculateLeaveSummary = (employee) => {
    const totalEntitlement = employeeLeaveEntitlements[employee] || 0;
    const takenLeaves = leaves
      .filter(
        (leave) => leave.employee === employee && leave.status === "Approved"
      )
      .reduce(
        (total, leave) =>
          total +
          (new Date(leave.endDate) - new Date(leave.startDate)) /
            (1000 * 60 * 60 * 24) +
          1,
        0
      );
    return {
      totalEntitlement,
      takenLeaves,
      remainingLeaves: totalEntitlement - takenLeaves,
    };
  };

  const employees = [...new Set(leaves.map((leave) => leave.employee))];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Leave Management
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage and review employee leave requests efficiently.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          onClick={() => setShowAddForm(true)}
        >
          Add New Leave Request
        </button>
      </header>

      {showAddForm && (
        <AddLeaveForm
          addLeaveRequest={addLeaveRequest}
          onClose={() => setShowAddForm(false)}
        />
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => {
            const { totalEntitlement, takenLeaves, remainingLeaves } =
              calculateLeaveSummary(employee);
            return (
              <div
                key={employee}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {employee}
                </h3>
                <p className="text-gray-600 mb-2">
                  Total Leave Entitlement:{" "}
                  <span className="font-semibold">{totalEntitlement} days</span>
                </p>
                <p className="text-gray-600 mb-2">
                  Leaves Taken:{" "}
                  <span className="font-semibold">{takenLeaves} days</span>
                </p>
                <p className="text-gray-600">
                  Remaining Leaves:{" "}
                  <span className="font-semibold">{remainingLeaves} days</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Leave Requests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaves.map((leave) => (
            <LeaveRequestCard
              key={leave.id}
              leave={leave}
              onApprove={() => updateLeaveStatus(leave.id, "Approved")}
              onReject={() => updateLeaveStatus(leave.id, "Rejected")}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leaves;
