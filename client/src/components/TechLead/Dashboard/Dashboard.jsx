import React from "react";

const Dashboard = () => {
  return (
    <div className="gap-2 m-2 grid grid-cols-3 grid-rows-2">
      <div className="box1 border border-black bg-blue-200 col-span-2">
        <div className="main">
          <h1>Overview</h1>
          <div className="box">
            <h4>Amit Saini</h4>
            <span>
              <h6>Tech Lead</h6>
              <button>Edit Profile</button>
            </span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              tempore repudiandae quod repellendus ipsam eligendi a sint earum
              consequuntur vitae!
            </p>
            <div>View Tasks</div>
          </div>
        </div>
      </div>
      <div className="box2 border border-black bg-red-200 row-span-2 col-span-1">
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
      <div className="border border-black bg-green-200 col-span-1">
        <div className="main">
          <h1>Meetings</h1>
          <div></div>
        </div>
      </div>
      <div className="border border-black bg-purple-200 col-span-1">4</div>
    </div>
  );
};

export default Dashboard;
