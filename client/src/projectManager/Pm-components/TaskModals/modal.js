import React, { useState } from 'react';
import TaskModal from './taskModal';

function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="container mx-auto mt-5">
      <h3 className="text-center mb-4">Modal Example</h3>
      <div className="flex justify-center">
        <button 
          onClick={() => setIsModalVisible(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
      </div>
      <TaskModal 
        isVisible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        title="Example Modal"
      >
        <p>This is the modal content. You can place any React component here.</p>
      </TaskModal>
    </div>
  );
}

export default Modal;
