import React, { useState } from "react";

const TeamMemberCard = ({ member, onEdit, onDelete, onAssignTask }) => {
  const [task, setTask] = useState("");

  const handleAssignTask = () => {
    if (task) {
      onAssignTask(member.id, task);
      setTask("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <img
        src={member.imgSrc}
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {member.name}
      </h2>
      <p className="text-gray-600 text-center">{member.role}</p>

      <div className="absolute top-2 right-2">
        <button
          onClick={onEdit}
          className="border px-2 py-1 text-sm bg-gray-300 rounded-lg text-blue-500 hover:text-blue-700 mr-2"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="border px-2 py-1 text-sm bg-gray-300 rounded-lg text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Assign a new task"
        />
        <button
          onClick={handleAssignTask}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Assign Task
        </button>
        <ul className="mt-2">
          {member.tasks.map((t, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded mb-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMemberCard;
