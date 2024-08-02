import React from "react";


const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-5 gap-3 mt-6 ml-4">
          <div className=" col-span-3 bg-white h-[80px] ">Overview</div>
          <div className=" col-span-2 bg-white h-[180px] ">
            <div className="grid">Upcoming Holidays</div>
          </div>
          <div className=" col-span-3 bg-white h-[280px] ">Task Overview</div>
          <div className=" col-span-2 bg-white h-[180px] ">Weekly Progress</div>
          <div className=" col-span-3 bg-white h-[80px] ">Approaching Deadline</div>
          <div className=" col-span-2 bg-white h-[80px] ">Apply Leave</div>
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
