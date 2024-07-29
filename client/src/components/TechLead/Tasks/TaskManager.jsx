import React, { useState } from 'react';
import dayjs from 'dayjs'; // For date manipulation
import NewTaskForm from './NewTaskForm'; // Import the NewTaskForm component
import EditTaskForm from './EditTaskForm'; // Import the EditTaskForm component

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', startDate: '2024-08-01', endDate: '2024-08-07', completed: false, description: 'Description for Task 1', assignee: 'John Doe' },
        { id: 2, title: 'Task 2', startDate: '2024-08-05', endDate: '2024-08-10', completed: true, description: 'Description for Task 2', assignee: 'Jane Smith' },
    ]);

    const [editingTask, setEditingTask] = useState(null);
    const [showNewTaskForm, setShowNewTaskForm] = useState(false);

    // Handle task editing
    const handleEdit = (task) => {
        setEditingTask(task);
    };

    // Handle task deletion
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Save edited task
    const handleSaveEdit = (updatedTask) => {
        setTasks(tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        ));
        setEditingTask(null);
    };

    // Create a new task
    const handleCreateTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowNewTaskForm(false);
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
                    <div key={task.id} className="border-b border-gray-300 p-4 flex flex-col sm:flex-row justify-between items-start">
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{task.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">Assignee: {task.assignee}</p> 
                            <p className="text-sm text-gray-600">From: {dayjs(task.startDate).format('YYYY-MM-DD')} To: {dayjs(task.endDate).format('YYYY-MM-DD')}</p>
                            <p className="text-sm text-gray-700 mt-2">{task.description}</p>
                            <p className="text-sm text-gray-500">{task.completed ? "Completed" : "Pending"}</p>
                            <p className="text-sm text-gray-500 mt-1">Time left: {dayjs(task.endDate).diff(dayjs(), 'day')} days</p>
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
                ))}
            </div>

            {/* Edit Task Form */}
            {editingTask && (
                <EditTaskForm 
                    task={editingTask} 
                    onSave={handleSaveEdit} 
                    onCancel={() => setEditingTask(null)} 
                />
            )}

            {/* New Task Form */}
            {showNewTaskForm && (
                <NewTaskForm 
                    onCreate={handleCreateTask} 
                    onCancel={() => setShowNewTaskForm(false)} 
                />
            )}
        </div>
    );
};

export default TaskManager;
