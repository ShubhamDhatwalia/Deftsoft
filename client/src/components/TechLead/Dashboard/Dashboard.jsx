import React from "react";
import ProfileItem from "./ProfileItem";
import { Flex, Progress } from "antd";

const Dashboard = () => {
  return (
    <div className="h-[536px] bg-slate-100 grid grid-cols-3 grid-rows-2 gap-4 overflow-auto">
      {/* Box 1 */}
      <div className="mx-6 col-span-2 h-16">
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
                    marginTop: "1vw",
                  }}
                >
                  <Progress percent={50} size="small" status="active" />
                </Flex>
                <button className="px-2 font-semibold text-[12px] text-white rounded-xl bg-slate-500 hover:bg-slate-400">
                  View Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box2 mt-2 row-span-2 mr-5 col-span-1">
        <h1 className="text-xl">Your Team</h1>
        <div className="main w-full h-[400px] flex flex-col overflow-y-auto mt-2 border border-slate-100 bg-white rounded-lg">
          <ProfileItem
            name="Nikhil Harchand"
            role="Web Designer"
            imageUrl="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProfileItem
            name="Nikhil Harchand"
            role="Web Designer"
            imageUrl="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProfileItem
            name="Nikhil Harchand"
            role="Web Designer"
            imageUrl="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProfileItem
            name="Nikhil Harchand"
            role="Web Designer"
            imageUrl="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <button className="mt-4 p-2 font-semibold text-white bg-slate-600 hover:bg-slate-400 rounded-xl border">
          Add Member
        </button>
      </div>

      {/* Box 3 */}
      <div className="col-span-1 mx-6 px-4">
        <h1 className="text-xl">Meetings</h1>
        <div className="main border bg-blue-400 rounded-lg shadow-lg">
          <div>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="col-span-1 mx-6 px-4">
        <h1 className="text-xl">Inbox</h1>
        <div className="border bg-blue-400 rounded-lg shadow-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
