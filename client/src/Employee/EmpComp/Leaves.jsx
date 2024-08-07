import React from "react";

export const Leaves = () => {
  return (
    <div className="rounded-lg font-semibold flex flex-col gap-4 bg-orange-100 p-5">
      <p className="font-bold"> Apply For Leaves</p>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <div className="m-2">From</div>
          <div className="bg-gray-100 flex-1 p-2">image</div>
        </div>
        <div className="flex gap-6">
          <div className="m-2 pr-5 ">To</div>
          <div className="bg-gray-100 flex-1 p-2">image</div>
        </div>
      </div>
    </div>
  );
};
