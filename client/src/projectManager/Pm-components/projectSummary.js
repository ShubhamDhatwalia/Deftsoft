import { useState } from "react";
import React from "react";
import ProjectData from "./projectData";
import "./projectSummary.css";
import RoundProgressBar from "./roundProgressBar";
import Modal from "./TaskModals/modal";
import TaskModal from "./TaskModals/taskModal";

function ProjectSummary() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };


  const closeModal = ()=>{
    setSelectedProject(null);
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

      {ProjectData.map((data,index) => {
        return(
          <React.Fragment key={index}>
            <div 
              className="project-list flex flex-row items-center justify-between w-9/12 border-y border-x rounded-lg bg-orange-100 text-slate-600 transition ease-in-out delay-150 hover:bg-orange-200 hover:cursor-pointer hover:translate-y-1 "
              onClick={()=>toggleModal(data)}
            >
              <p className="p-details">{data.pName}</p>
              <p className="p-details">{data.tl}</p>
              <p className="p-details">{data.dueDate}</p>
              <p className="p-details">{data.status}</p>
              <div className="p-details flex justify-center">
                <RoundProgressBar value={data.progress} />
              </div>
            </div>

            {
              isModalOpen && selectedProject && selectedProject=== data &&<Modal data={data} onClick={closeModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            }
          </React.Fragment>
        );  
    })}
    </>
  );
}

export default ProjectSummary;
