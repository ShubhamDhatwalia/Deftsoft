import React from "react";

const Tasks = () => {
  return(
    <div className="bg-slate-100 ">
    <h1 className="mt-7 ml-10 text-xl text-slate-500	">Task Type</h1>
    <div className="flex justify-between mt-10 ml-[100px] mr-[100px] text-slate-500 ">
    <h2 className="border-solid text-white bg-indigo-600 rounded-full p-2 text-sm px-12 py-3.5">Your Tasks</h2>
    <h2 className="border-solid text-white bg-indigo-600 rounded-md p-2 text-sm px-3.5 py-3.5 "> + Create new task</h2>
    </div>
    </div>
  )
   
};

export default Tasks;
