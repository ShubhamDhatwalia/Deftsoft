import React, { useState } from "react";

export const Apply = () => {
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    duration: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateDuration = () => {
    const { fromDate, toDate } = formData;
    if (fromDate && toDate) {
      const start = new Date(fromDate);
      const end = new Date(toDate);
      const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1; // Including both start and end dates
      setFormData({
        ...formData,
        duration: duration,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Apply Leave
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="leaveType"
            className="block text-sm font-medium text-gray-700"
          >
            Leave Type:
          </label>
          <select
            id="leaveType"
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label
            htmlFor="fromDate"
            className="block text-sm font-medium text-gray-700"
          >
            From Date:
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={(e) => {
              handleChange(e);
              calculateDuration();
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="toDate"
            className="block text-sm font-medium text-gray-700"
          >
            To Date:
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={(e) => {
              handleChange(e);
              calculateDuration();
            }}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (Days):
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-gray-700"
          >
            Comments:
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Apply
        </button>
      </form>
    </div>
  );
};


