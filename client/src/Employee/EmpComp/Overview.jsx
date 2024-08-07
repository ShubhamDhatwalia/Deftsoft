import React from "react";

export const Overview = () => {
  return (
    <div className="p-5  w-full bg-red-100 rounded-lg">
      <div className="flex font-bold justify-between">
        <p>Overview</p>
        <button className="bg-gray-100 p-1 rounded-lg">Month</button>
      </div>
      <div className="flex mt-4 gap-6 justify-between">
        <div className="flex gap-2">
          <p>23</p>
          <p>Total Task</p>
        </div>
        <div className="flex gap-2">
          <p>15</p>
          <p>Completed Task</p>
        </div>
        <div className="flex gap-2">
          <p>8</p>
          <p>In Progress</p>
        </div>
      </div>
    </div>
  );
};
