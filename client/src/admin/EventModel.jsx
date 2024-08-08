import React, { useState } from "react";

function EventModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (title) {
      onSave(title);
      setTitle("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-45 flex items-center justify-center z-10">
      <div className="bg-white  p-4 rounded-lg  flex  flex-col">
        <h2 className="text-xl font-semibold mb-4">Add Event</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter event title"
          className=" border-2 border-slate-200 bg-slate-200 hover:border-blue-200 cursor-pointer focus:outline-blue-200 mb-4  rounded-xl px-4 text-lg pr-10 h-10"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-gray-600 "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
