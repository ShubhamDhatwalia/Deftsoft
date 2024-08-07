import React from 'react';
import { motion } from 'framer-motion';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed px-2 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <p className="text-lg font-medium mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white text-base font-medium px-2 py-1 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white text-base font-medium px-2 py-1 rounded hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmationDialog;
