import React from 'react';

export const Leaves = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">My Leave List</h2>

      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label className="block text-gray-700 mb-2">From Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            defaultValue="2024-01-01"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">To Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            defaultValue="2024-12-31"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Leave Type</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
            <option>Select</option>
            {/* Add more options here if needed */}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6 items-center">
        <div className="col-span-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Show Leave with Status</span>
          </label>
        </div>
        <div>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300">
            <option>Select</option>
            <option>Rejected</option>
            <option>Cancelled</option>
            <option>Pending Approval</option>
            <option>Scheduled</option>
            <option>Taken</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Reset
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Search
        </button>
      </div>
    </div>
  );
};