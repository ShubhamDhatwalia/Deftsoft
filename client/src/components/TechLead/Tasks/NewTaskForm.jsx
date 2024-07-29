import React, { useState } from 'react';

const NewTaskForm = ({ onCreate, onCancel }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    completed: false,
    description: '',
    assignee: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData({
      ...taskData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    if (!taskData.title || !taskData.startDate || !taskData.endDate) return; // Validation check
    const newTask = {
      id: Date.now(), // Use a timestamp or UUID for unique id
      ...taskData
    };
    onCreate(newTask);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl mb-4">New Task</h2>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Start Date:
          <input
            type="date"
            name="startDate"
            value={taskData.startDate}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          End Date:
          <input
            type="date"
            name="endDate"
            value={taskData.endDate}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            rows="3"
          />
        </label>
        <label className="block mb-2">
          Assignee:
          <input
            type="text"
            name="assignee"
            value={taskData.assignee}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-4">
          Completed:
          <input
            type="checkbox"
            name="completed"
            checked={taskData.completed}
            onChange={handleChange}
            className="ml-2"
          />
        </label>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskForm;
