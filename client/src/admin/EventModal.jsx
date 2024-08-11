import React, { useState } from "react";

function EventModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z\s]{0,30}$/; // Allows only up to 30 alphabets and spaces

    if (regex.test(value)) {
      setTitle(value);
      setError("");
    } else {
      setError("Title can only contain up to 30 characters including spaces.");
    }
  };

  const handleSave = () => {
    if (title) {
      onSave(title, description, location);
      setTitle("");
      setDescription("");
      setLocation("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 flex items-center justify-center z-10">
      <div className="bg-white p-4 rounded-lg max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-4">Add Event</h2>
        <form className="flex flex-col">
          <label className="text-lg font-medium -mb-3">
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter event title"
            className="border-2 border-blue-100 bg-blue-100 hover:border-blue-400 cursor-pointer focus:outline-blue-400 mb-1 rounded-xl px-4 text-lg pr-10 h-10"
          />
          {error && (
            <p className="text-red-500 text-xs mb-3 max-w-full break-words leading-tight">{error}</p>
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description"
            className="border-2 border-blue-100 bg-blue-100 hover:border-blue-400 cursor-pointer focus:outline-blue-400 mb-2 rounded-xl px-4 text-lg pr-10 h-14"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter event location"
            className="border-2 border-blue-100 bg-blue-100 hover:border-blue-400 cursor-pointer focus:outline-blue-400 mb-2 rounded-xl px-4 text-lg pr-10 h-10"
          />
          <div className="flex justify-between mt-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-lg font-medium text-white px-4 py-1 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
