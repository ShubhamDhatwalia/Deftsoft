import React, { useState } from "react";

const AddMemberForm = ({ addMember }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember({ name, role, imgSrc });
    setName("");
    setRole("");
    setImgSrc("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add New Member
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="text"
          value={imgSrc}
          onChange={(e) => setImgSrc(e.target.value)}
          placeholder="Image URL"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
