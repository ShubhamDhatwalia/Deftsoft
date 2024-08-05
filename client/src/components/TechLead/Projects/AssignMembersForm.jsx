// src/AssignMembersForm.js
import React, { useState } from "react";

const membersList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  // Add more members as needed
];

const AssignMembersForm = ({ project, assignMembers, onClose }) => {
  const [selectedMembers, setSelectedMembers] = useState(
    project.members.map((member) => member.id)
  );

  const handleMemberChange = (e) => {
    const { value, checked } = e.target;
    setSelectedMembers((prev) =>
      checked
        ? [...prev, parseInt(value)]
        : prev.filter((id) => id !== parseInt(value))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const assignedMembers = membersList.filter((member) =>
      selectedMembers.includes(member.id)
    );
    assignMembers(project.id, assignedMembers);
  };

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Assign Members
        </h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="text-gray-700 mb-2">Select Members:</legend>
            {membersList.map((member) => (
              <div key={member.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`member-${member.id}`}
                  value={member.id}
                  checked={selectedMembers.includes(member.id)}
                  onChange={handleMemberChange}
                  className="mr-2"
                />
                <label
                  htmlFor={`member-${member.id}`}
                  className="text-gray-800"
                >
                  {member.name}
                </label>
              </div>
            ))}
          </fieldset>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignMembersForm;
