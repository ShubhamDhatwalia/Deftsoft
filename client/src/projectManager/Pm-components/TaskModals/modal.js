import React from "react";

const modal = document.querySelector(".modal")
function Modal({ data ,closeModal,isModalOpen, setIsModalOpen}) {

closeModal=()=>{
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div
      className="modal inset-0 fixed w-12/12 bg-black bg-opacity-70 z-50 h-auto flex justify-center items-center">
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
            <p>Status: {data.status}</p>
          </div>

            <div className="team-members ">
              <h1 className="text-lg text-slate-700 mb-2">Team Members</h1>
              {data.team.map((mem)=>{
                return(
                  <>
                    <h3>{mem}</h3>
                  </>
                )
              })}
            </div>

          <div className="about-project p-3">
            <h1 className="text-lg text-slate-700 mb-2">About Project</h1>
            <p>
              {data.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
