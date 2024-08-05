// src/AddProjectForm.js
import React, { useState } from "react";

const AddProjectForm = ({ addProject }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, description, status });
    setName("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-[#418CBD] text-white rounded"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
