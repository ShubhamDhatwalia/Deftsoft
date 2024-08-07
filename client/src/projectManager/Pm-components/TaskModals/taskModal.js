import React from 'react';

const TaskModal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="text-lg">{title}</h3>
          <button onClick={onClose} className="text-black close-button">&times;</button>
        </div>
        <div className="p-4">
          {children}
        </div>
        <div className="border-t px-4 py-2 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
