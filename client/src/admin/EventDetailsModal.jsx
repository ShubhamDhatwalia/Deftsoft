import React from "react";

function EventDetailsModal({ isOpen, onClose, event, onDelete }) {
  if (!isOpen || !event) return null;

  const handleDelete = () => {
    if (event) {
      onDelete(event.id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 flex items-center justify-center z-10">
      <div className="bg-white p-4 rounded-lg flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Event Details</h2>
        <p className="mb-2"><strong>Title:</strong> {event.title}</p>
        <p className="mb-2"><strong>Description:</strong> {event.extendedProps.description || 'No description'}</p>
        <p className="mb-2"><strong>Start:</strong> {new Date(event.start).toLocaleString()}</p>
        <p className="mb-2"><strong>End:</strong> {new Date(event.end).toLocaleString()}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsModal;
