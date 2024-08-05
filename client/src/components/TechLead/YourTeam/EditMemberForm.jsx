import React, { useState } from "react";

const EditMemberForm = ({ member, editMember }) => {
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [imgSrc, setImgSrc] = useState(member.imgSrc);

  const handleSubmit = (e) => {
    e.preventDefault();
    editMember({ ...member, name, role, imgSrc });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Member</h2>
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditMemberForm;
