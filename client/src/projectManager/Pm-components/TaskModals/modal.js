import React from "react";
import { FaUserGroup } from "react-icons/fa6";


function Modal({ data, closeModal, isModalOpen, setIsModalOpen }) {

  closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let bgColor;
    if(data.progress>=90) bgColor = "#387F39"
    else if(data.progress<90 && data.progress>=70) bgColor = "#074173"
    else if(data.progress<70 && data.progress>=40) bgColor = "#F6FB7A"
    else if(data.progress<40) bgColor = "#ff0000"


  return (
    <div className="modal inset-0 fixed w-12/12 bg-black bg-opacity-70 z-50 h-auto flex justify-center items-center">
      <div
        className="modal-content w-2/4 bg-gray-200 rounded-lg h-3/4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="z-1">
          <div className="sticky top-0 left-0 right-0 bg-pink-200 bg-opacity-40 mb-1 flex justify-between">
            <h2 className="p-heading text-3xl pl-72">{data.pName}</h2>
            <button
              type="button"
              className="close-btn bg-rose-500 rounded-sm w-10 hover:bg-rose-800"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <div className="project-report flex justify-between p-2">
            <h3>Team Lead: {data.tl}</h3>
            <p>Due Date: {data.dueDate}</p>
            <p style={{backgroundColor:`${bgColor}`}}>Status: {data.status}</p>
          </div>

          <div className="team-members ml-3 mr-3">
            <h1 className="text-lg text-slate-700 mb-2">Team Members</h1>
            <div className="members">
              {data.team.map((mem) => {
                return (
                  <>
                    <div className="member flex">
                      <FaUserGroup />
                      <h3 className="ml-2">{mem}</h3>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* <div className="project-progress mx-3 w-100 border-2 border-rose-600">
              <h1 className="text-lg text-slate-700 mb-2">Project Progress</h1>
              <div className="progress-bar w-full h-5 rounded-lg border-2 border-green-900">
                  <div className="bar flex items-center justify-center border-2 border-blue-200 bg-green-700 w-full h-full" >
                        <p className="text-center text-sm">{data.progress}</p>
                  </div>
              </div>
          </div> */}

          <div className="about-project p-3">
            <h1 className="text-lg text-slate-700 mb-2">About Project</h1>
            <p>{data.about}</p>
          </div>
          <div className="flex justify-center m-3">
            <button
              className="ok-btn bg-rose-500 rounded-sm w-10 hover:bg-rose-800 justify-center w-20"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
