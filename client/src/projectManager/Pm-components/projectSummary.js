import { useState } from "react";
import ProjectData from "../projectData";
import './projectSummary.css';
import RoundProgressBar from "./roundProgressBar";
import Modal from "./TaskModals/modal";
import TaskModal from "./TaskModals/taskModal";

function ProjectSummary() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const projectPage=()=>{
    
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

  return (
    <>
      <h2>Project Summary</h2>
      <div className="header-row flex w-9/12 border-2 rounded-lg h-1/6 pt-2 bg-orange-200">

                <h3 className="p-heading ">Project Name</h3>
                <h3 className="p-heading ">Team Lead</h3>
                <h3 className="p-heading ">Due Date</h3>
                <h3 className="p-heading ">Status</h3>
                <h3 className="p-heading">Progress</h3>
        </div>

        

      {ProjectData.map((data) => {
        return (
          <>
            <div className="project-list flex flex-row items-center justify-between w-9/12 border-y border-x rounded-lg bg-orange-100 text-slate-600 transition ease-in-out delay-150 hover:bg-orange-200 hover:cursor-pointer hover:translate-y-1 " onClick={projectPage}>
              <p className="p-details">{data.pName}</p>
              <p className="p-details">{data.tl}</p>
              <p className="p-details">{data.dueDate}</p>
              <p className="p-details">{data.status}</p>
              <div className="p-details flex justify-center"><RoundProgressBar value={data.progress}/></div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ProjectSummary;
