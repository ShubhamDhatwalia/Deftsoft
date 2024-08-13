import React from "react";
import './dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';
import { MdBarChart } from "react-icons/md";
import { GiSuitcase } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";
import { GrResources } from "react-icons/gr";

import PMCalendar from "./calendar";
import Card from './Card';
import OverviewCard from "./overviewCard";
import ProgressGraph from "./progressGraph";
import PieChart from "./pieChart";

function PMDashboard(){
    return(
        <>
            <div className="dashboard w-full ">
                <div className="container1 flex w-full border-2 my-3 py-2">
                    <div className="top-box w-7/12 mx-2 flex flex-row w-full">
                        <div className="card-box  w-1/4" >
                            {/* <h2>project details</h2> */}
                            <Card/>
                        </div>

                        <div className="overview-details w-full flex flex-row flex-wrap gap-7 my-2 ml-7">
                            <div className="cards revenue w-1/5 bg-gray-100 my-3 mx-1 px-6 py-5 rounded-xl">
                                {/* <h1>Revenue</h1> */}
                             <OverviewCard name="Revenue" icon={<MdBarChart />} total="$1000000" />
                            </div>
                            <div className="cards project w-1/5 bg-gray-100 my-3 mx-1 px-6 py-5 rounded-xl">
                                {/* <h1>Projects</h1> */}
                                <OverviewCard name="Projects" icon={<GiSuitcase />} total="300" completed="275"/>
                            </div>
                            <div className="cards timespent w-1/5 bg-gray-100 my-3 mx-1 px-6 py-5 rounded-xl">
                                {/* <h1>Timespent</h1> */}
                                <OverviewCard name="TimeSpent" icon={<IoTimer />} total="1200" completed="850"/>
                            </div>

                            <div className="cards resources w-1/5 bg-gray-100 my-3 mx-1 px-6 py-5 rounded-xl">
                                {/* <h1>Resources</h1> */}
                                <OverviewCard name="Resources" icon={<GrResources />} total="120" completed="104"/>
                            </div>
                          
                        </div>
                      
                    </div>


                </div>
                <div className="outer-lower-box flex flex-row">
                <div className="lower-box border-2 w-3/4">
                    <h2>Overview</h2>
                    <ProgressGraph/>
                </div>
                <div className="pie-chart border-2 ml-10 w-4/12 px-5 py-5" >
                   <PieChart/>
                </div>
                </div>
            </div>
        </>
    );
}

export default PMDashboard;