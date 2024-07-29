import React from "react";
import { Flex, Progress } from "antd";

const Dashboard = () => {
  return (
    <div className="h-screen bg-slate-100 grid grid-cols-3 grid-rows-2 overflow-auto">
      <div className="mx-6 bg-blue-400 col-span-2">
        <div className="main mb-4">
          <h1 className="text-xl my-2">Overview</h1>
          <div className="box text-sm bg-white px-4 py-2 rounded-lg shadow-lg">
            <h4 className="font-bold">Bryan Griffith</h4>
            <span className="flex text-[10px] justify-between">
              <h6 className="">Sr. Tech Lead</h6>
              <button className="font-semibold text-slate-500">
                Edit Profile
              </button>
            </span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              tempore repudiandae quod repellendus ipsam eligendi a sint earum
              consequuntur vitae!
            </p>
            <div className="w-full h-12 border-t my-5">
              <div className="my-2 flex justify-around">
                <Flex wrap gap="small">
                  <Progress type="circle" percent={50} size={50} />
                </Flex>
                <Flex
                  vertical
                  gap="small"
                  style={{
                    width: "70%",
                  }}
                >
                  <Progress percent={50} size="small" status="active" />
                </Flex>
                <button className="p-2 rounded-md bg-slate-500">
                  View Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box2 border bg-red-200 row-span-2 col-span-1">
        <div className="main">
          <h1>Your Team</h1>
          <div className="profile">
            <img src="" alt="" />
            <div className="">
              <h4>Nikhil Harchand</h4>
              <h6>Web Designer</h6>
            </div>
          </div>
          <button>Add Member</button>
        </div>
      </div>
      <div className="border bg-blue-400 col-span-1 px-4 py-2 rounded-lg shadow-lg my-6 mx-6">
        <h1>Meetings</h1>
        <div className="main">
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div className="border bg-blue-400 col-span-1 px-4 py-2 rounded-lg shadow-lg my-6 mx-6">
        <h1>Inbox</h1>
      </div>
    </div>
  );
};

export default Dashboard;
