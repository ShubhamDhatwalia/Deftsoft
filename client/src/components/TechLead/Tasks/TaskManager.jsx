import React, { useState } from 'react';
import dayjs from 'dayjs'; // For date manipulation
import { CheckCircleTwoTone } from '@ant-design/icons'; // Ant Design Icons
import PendingActionsSharpIcon from '@mui/icons-material/PendingActionsSharp'; // Material Icons
import NewTaskForm from './NewTaskForm'; // Import the NewTaskForm component
import EditTaskForm from './EditTaskForm'; // Import the EditTaskForm component

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

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
        <div className="bg-slate-100 min-h-screen px-4 sm:px-6 lg:px-8 ">
            <h1 className="text-xl text-slate-500 text-center sm:text-left">Task Type</h1>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 mb-6 text-slate-500 ">
                <h2 className="border-solid text-white bg-indigo-600 rounded-full p-2 text-sm px-6 py-3.5 shadow-xl">
                    Your Tasks
                </h2>
                <button 
                    className="border-solid text-white bg-indigo-600 rounded-md p-2 text-sm px-4 py-2 mt-4 sm:mt-0 shadow-xl hover:bg-indigo-700"
                    onClick={() => setShowNewTaskForm(true)}
                >
                    + Create new task
                </button>
            </div>

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 mt-40 text-2xl ">No tasks assigned yet.</p>
            ) : (
                <div className="space-y-4">
                    {tasks.map(task => (
                        <div key={task.id} className="border border-gray-300 p-4 rounded-lg bg-white shadow-md">
                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold">{task.title}</h3>
                                    <div className="flex items-center mt-1 space-x-4">
                                        <div className="flex-shrink-0 border-r border-gray-300 pr-4">
                                            <p className="text-sm text-gray-500">Assignee: {task.assignee}</p>
                                        </div>
                                        <div className="pl-4">
                                            <p className="text-sm text-gray-600">
                                                From: {dayjs(task.startDate).format('YYYY-MM-DD')} To: {dayjs(task.endDate).format('YYYY-MM-DD')}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-2 pr-28 border-t border-gray-300 pt-2">{task.description}</p>
                                    <div className="w-full flex justify-between mt-4 sm:mt-0">
                                        <p className="text-sm text-gray-500 mt-3">
                                            {task.completed ? "Completed " : "Pending "}
                                            {task.completed && <CheckCircleTwoTone twoToneColor="#52c41a" />}
                                            {!task.completed && <PendingActionsSharpIcon color="action" />}
                                        </p>
                                        <p className="text-sm text-gray-500 pl-4">
                                            Time left: {dayjs(task.endDate).diff(dayjs(), 'day')} days
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2 mt-4 sm:mt-0">
                                    <button 
                                        className="text-blue-500 hover:underline "
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
                        </div>
                    ))}
                </div>
            )}

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
