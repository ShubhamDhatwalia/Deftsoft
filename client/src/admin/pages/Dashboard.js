import React from "react";
import { Circle } from "rc-progress";
import { FaUsers } from "react-icons/fa6";
import CountUp from "react-countup";
import { FaLaptopCode } from "react-icons/fa";
// import { GrDocumentConfig } from "react-icons/gr";
import ReactCharts from "echarts-for-react";
import * as echarts from "echarts";

function Dashboard() {
  const option = {
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundcolor: "rgba(0,0,0,0.59)",
      borderwidth: 0,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "March",
          "Apirl",
          "May",
          "Jun",
          "July",
          "August",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    ],

    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: "true",
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "#F450D3",
            },
          ]),

          width: 4,
        },

        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgba(255,144, 70, 0.1)",
            },
          ]),
        },
        showSymbol: false,
        data: [
          2000, 6000, 4000, 5000, 6000, 4000, 8000, 9000, 7000, 8000, 9000,
          5000,
        ],
      },
    ],
  };

  return (
    <>
      {/* ---------- Progress bars ----------- */}

      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-around flex-wrap mt-6 gap-5 w-full ">
          <div className="bg-teal-50  p-4 rounded-xl drop-shadow-lg hover:scale-105 transition duration-200 h-36">
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

          <div className="bg-orange-50  p-4 rounded-xl drop-shadow-lg hover:scale-105 transition duration-200 h-36">
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
              <h2 className="text-blue-500 text-base font-semibold">
                Projects
              </h2>
              <CountUp
                start={0}
                end={80}
                delay={0}
                duration={5}
                className="text-xl font-bold"
              />
              <span className="text-xl font-bold">/120</span>
            </div>
          </div>

          <div className=" chart w-[35vw]  ">
          <ReactCharts option={option} style={{ height: '250px', width: '100%' }} />
        </div>
          {/* <div className="bg-lime-100  p-4 rounded-xl drop-shadow-lg hover:scale-105 transition duration-200">
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

          <div className="bg-violet-50  p-4 rounded-xl drop-shadow-lg hover:scale-105 transition duration-200">
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
          </div> */}
        </div>

        
      </div>
    </>
  );
}

export default Dashboard;
