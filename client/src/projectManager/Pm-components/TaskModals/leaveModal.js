// import { useState } from "react";

const LeaveModal = ({
  data,
  closeModal,
  isModalOpen,
  setIsModalOpen,
  handleCancel,
}) => {
  // const[dataDetails,setDataDetails] = useState(data);

  closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="modal inset-0 fixed w-12/12 bg-black bg-opacity-70 z-50 h-auto flex flex-wrap justify-center items-center">
        <div className="modal-content w-2/5 h-auto pb-2 mb-3 border-2 border-blue-300 bg-gray-200 flex flex-col items-center rounded-md">
          <div className="heading bg-blue-600 py-2  mb-2 text-gray-200 font-black text-2xl text-center  w-full">
            <h2>Leave Details</h2>
          </div>
          <div className="content w-3/5 ml-28 flex flex-col items-evenly gap-2">
            <div className="flex gap-2">
              <div className="w-28">
                <strong>Leave-Type</strong>
              </div>

              <div>
                <p>: {data.leaveType}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-28">
                <strong>Duration</strong>
              </div>
              <div>
                <p>: {data.leaveDuration}</p>
              </div>
            </div>

            <div className="flex gap-2"> 
              <div className="w-28">
                <strong>Start Date</strong>
              </div>
              <div>
                <p>: {data.startDate}</p>
              </div>
            </div>

            <div className="flex gap-2">
              {data.leaveDuration === "full" && (
                <>
                  <div className="w-28">
                    <strong>End Date</strong>
                  </div>
                  <div>
                    <p>: {data.endDate}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2"> 
              {data.leaveDuration === "specific-Time" &&  (
                <>
                  <div className="w-28">
                    <strong>Time</strong>
                  </div>
                  <div>
                    <p>: {data.specificTime}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2">
              {data.reason ? (
                <>
                  <div className="w-28">
                    <strong>Reason</strong>
                  </div>
                  <div>
                    <p>: {data.reason}</p>
                  </div>
                </>
              ):null}
            </div>

          </div>
          <div className="btn flex justify-center gap-10 mt-4 pt-2">
            <button
              type="button"
              className="ok-btn bg-green-700 w-20 rounded-md"
              onClick={closeModal}
            >
              OK
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-btn bg-rose-500 p-2 w-20 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeaveModal;
