import React from "react";
import { Circle } from "rc-progress";
import { FaUsers } from "react-icons/fa6";
import CountUp from 'react-countup';
import { FaLaptopCode } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";


function Dashboard() {
  return (
    <>
      {/* ---------- Progress bars ----------- */}

      <div className="flex justify-center flex-wrap mt-1 gap-4">
        <div className="bg-teal-50 m-4 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-200">
          <div className="mb-1 text-center flex justify-between gap-28">
            <FaUsers size={30} />
            <div className="relative" style={{ width: 50, height: 50 }}>
              <Circle
                percent={100}
                trailWidth={10}
                strokeWidth={10}
                strokeColor="#3b82f6"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold">
                100%
              </div>
            </div>
          </div>

          <div className="flex-col items-center gap-10">
            <h2 className="text-blue-500 text-base font-semibold"> Users</h2>
            <CountUp
              start={0}
              end={200}
              delay={0}
              duration={5}
              className="text-xl font-bold"
            />
          </div>
        </div>

        <div className="bg-orange-50 m-4 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-200">
          <div className="mb-1 text-center flex justify-between gap-28">
            <FaLaptopCode size={30} />
            <div className="relative" style={{ width: 50, height: 50 }}>
              <Circle
                percent={20}
                trailWidth={10}
                strokeWidth={10}
                strokeColor="#3b82f6"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold">
                20%
              </div>
            </div>
          </div>

          <div className="flex-col items-center gap-10">
            <h2 className="text-blue-500 text-base font-semibold">Projects</h2>
            <CountUp
              start={0}
              end={80}
              delay={0}
              duration={5}
              className="text-xl font-bold"
            />
            <span className="text-xl font-bold" >/120</span>
          </div>
        </div>

        <div className="bg-lime-100 m-4 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-200">
          <div className="mb-1 text-center flex justify-between gap-28">
            <FaLaptopCode size={30} />
            <div className="relative" style={{ width: 50, height: 50 }}>
              <Circle
                percent={50}
                trailWidth={10}
                strokeWidth={10}
                strokeColor="#3b82f6"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold">
                50%
              </div>
            </div>
          </div>

          <div className="flex-col items-center gap-10">
            <h2 className="text-blue-500 text-base font-semibold">
              Developers
            </h2>
            <CountUp
              start={0}
              end={80}
              delay={0}
              duration={5}
              className="text-xl font-bold"
            />
          </div>
        </div>

        <div className="bg-violet-50 m-4 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-200">
          <div className="mb-1 text-center flex justify-between gap-28">
            <GrDocumentConfig size={30} />
            <div className="relative" style={{ width: 50, height: 50 }}>
              <Circle
                percent={10}
                trailWidth={10}
                strokeWidth={10}
                strokeColor="#3b82f6"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold">
                10%
              </div>
            </div>
          </div>

          <div className="flex-col items-center gap-10">
            <h2 className="text-blue-500 text-base font-semibold">HR</h2>
            <CountUp
              start={0}
              end={20}
              delay={0}
              duration={5}
              className="text-xl font-bold"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
