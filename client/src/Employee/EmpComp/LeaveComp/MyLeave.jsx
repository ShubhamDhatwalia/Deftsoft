import React, { useState } from "react";

export const MyLeave = () => {
  // State to manage form inputs
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveStatus, setLeaveStatus] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [records, setRecords] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // Dummy data for demonstration purposes
  const dummyData = [
    { id: 1, date: "2024-09-01", status: "Approved", type: "Sick Leave" },
    { id: 2, date: "2020-09-05", status: "Pending", type: "Casual Leave" },
    { id: 1, date: "2022-09-01", status: "Approved", type: "Sick Leave" },
    { id: 2, date: "2030-09-05", status: "Pending", type: "Casual Leave" },
    { id: 1, date: "2040-09-01", status: "Approved", type: "Sick Leave" },
    { id: 2, date: "2050-09-05", status: "Pending", type: "Casual Leave" },
    { id: 1, date: "2060-09-01", status: "Approved", type: "Sick Leave" },
    { id: 2, date: "2010-09-05", status: "Pending", type: "Casual Leave" },
    // Add more dummy records as needed
  ];

  // Handle search button click
  const handleSearch = () => {
    // Check if no input values are provided
    if (!fromDate && !toDate && !leaveStatus && !leaveType) {
      setErrorMessage("Fill  in at least one field to search.");
      setRecords([]); // Clear any previous records
      return;
    } else {
      setErrorMessage(""); // Clear the error message if there is any input
    }

    // Convert input dates to Date objects, handle empty cases
    const fromDateParsed = fromDate ? new Date(fromDate) : null;
    const toDateParsed = toDate ? new Date(toDate) : null;

    const filteredRecords = dummyData.filter((record) => {
      const recordDate = new Date(record.date);

      // Check if the recordDate is within the fromDate and toDate range
      const isWithinDateRange =
        (!fromDateParsed || recordDate >= fromDateParsed) &&
        (!toDateParsed || recordDate <= toDateParsed);

      // Check if the record matches the leaveStatus and leaveType
      const matchesStatus = !leaveStatus || record.status === leaveStatus;
      const matchesType = !leaveType || record.type === leaveType;

      // Return true only if all conditions are met
      return isWithinDateRange && matchesStatus && matchesType;
    });

    // Set records based on the filtered results
    setRecords(filteredRecords);
  };

  // Handle reset button click
  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setLeaveStatus("");
    setLeaveType("");
    setRecords([]);
    setErrorMessage(""); // Clear the error message on reset
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Form */}
      <div className="mb-6 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Search Leave Records</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Leave Status
              </label>
              <select
                value={leaveStatus}
                onChange={(e) => setLeaveStatus(e.target.value)}
                className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Leave Type
              </label>
              <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className="mt-1 p-3 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">All</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
              </select>
            </div>
          </div>
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md">
              {errorMessage}
            </div>
          )}
          <div className="mt-5 flex gap-4 justify-end">
            <button
              type="button"
              onClick={handleSearch}
              className="px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 text-green-400 font-medium rounded-2xl gap-5 focus:ring-2 focus:ring-green-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Results Table */}
      {records.length > 0 && (
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Records Found</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
