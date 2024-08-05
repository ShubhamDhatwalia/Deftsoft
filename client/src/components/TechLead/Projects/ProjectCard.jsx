import React from "react";

const ProjectCard = ({ project, onEdit, onDelete, onAssign }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {project.name}
      </h2>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <p className="text-gray-500 mb-4">Status: {project.status}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 mr-2"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 mr-2"
        >
          Delete
        </button>
        <button
          onClick={onAssign}
          className="text-green-500 hover:text-green-700"
        >
          Assign Members
        </button>
      </div>
      <div className="absolute top-2 right-2">
        {project.members && project.members.length > 0 && (
          <div className="text-gray-500 text-sm">
            Members: {project.members.map((member) => member.name).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
