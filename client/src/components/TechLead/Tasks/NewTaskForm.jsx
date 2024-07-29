import React, { useState } from 'react';

const NewTaskForm = ({ onCreate, onCancel }) => {
  const [newTaskData, setNewTaskData] = useState({
    title: '',
    date: '',
    completed: false,
    description: '',
    assignee: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTaskData({
      ...newTaskData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    if (!newTaskData.title || !newTaskData.date) return; // Validation check
    const newTask = {
      id: Date.now(), // Use timestamp for unique ID
      ...newTaskData
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
            value={newTaskData.title}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Date:
          <input
            type="date"
            name="date"
            value={newTaskData.date}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={newTaskData.description}
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
            value={newTaskData.assignee}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-4">
          Completed:
          <input
            type="checkbox"
            name="completed"
            checked={newTaskData.completed}
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
