import React, { useState } from 'react';
import dayjs from 'dayjs'; // For date manipulation

// TaskManager Component
const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', date: '2024-08-01', completed: false, description: 'Description for Task 1', assignee: 'John Doe' },
    { id: 2, title: 'Task 2', date: '2024-08-05', completed: true, description: 'Description for Task 2', assignee: 'Jane Smith' },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [newTaskData, setNewTaskData] = useState({
    title: '',
    date: '',
    completed: false,
    description: '',
    assignee: ''
  });
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  // Handle task editing
  const handleEdit = (task) => {
    setEditingTask(task);
    setNewTaskData({ ...task });
  }; 

  // Handle task deletion
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Save edited task
  const handleSaveEdit = () => {
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? { ...task, ...newTaskData } : task
    ));
    setEditingTask(null);
  };

  // Create a new task
  const handleCreateTask = () => {
    if (!newTaskData.title || !newTaskData.date) return; // Validation check
    const newTask = {
      id: tasks.length + 1,
      ...newTaskData
    };
    setTasks([...tasks, newTask]);
    setNewTaskData({ title: '', date: '', completed: false, description: '', assignee: '' });
    setShowNewTaskForm(false);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTaskData({
      ...newTaskData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Task Component
  const Task = ({ task }) => {
    const { title, date, completed, description, assignee } = task;
    const timeLeft = dayjs(date).diff(dayjs(), 'day'); // Time left in days

    return (
      <div className="border-b border-gray-300 p-4 flex flex-col sm:flex-row justify-between items-start">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">Due: {dayjs(date).format('YYYY-MM-DD')}</p>
          <p className="text-sm text-gray-500">{completed ? "Completed" : "Pending"}</p>
          <p className="text-sm text-gray-700 mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-1">Time left: {timeLeft} days</p>
          <p className="text-sm text-gray-500 mt-1">Assignee: {assignee}</p> {/* Display Assignee */}
        </div>
        <div className="flex flex-col items-end space-y-2 mt-4 sm:mt-0">
          <button 
            className="text-blue-500 hover:underline"
            onClick={() => handleEdit(task)}
          >
            Edit
          </button>
          <button 
            className="text-red-500 hover:underline"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-100 min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="mt-7 text-xl text-slate-500 text-center sm:text-left">Task Type</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 mb-6 text-slate-500">
        <h2 className="border-solid text-white bg-indigo-600 rounded-full p-2 text-sm px-6 py-3.5">
          Your Tasks
        </h2>
        <button 
          className="border-solid text-white bg-indigo-600 rounded-md p-2 text-sm px-4 py-2 mt-4 sm:mt-0"
          onClick={() => setShowNewTaskForm(true)}
        >
          + Create new task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
          />
        ))}
      </div>

      {/* Edit Task Form */}
      {editingTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl mb-4">Edit Task</h2>
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
                onClick={() => setEditingTask(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Task Form */}
      {showNewTaskForm && (
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
                onClick={() => setShowNewTaskForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManager;