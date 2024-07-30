import React from "react";
import './dashboard.css';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from "./calendar";
// import { PieChart } from "@mui/x-charts";
import PieColor from "./PieChart";
// import SideDrawer from "../components/SideDrawer";
import Sidebar from "./Sidebar";


function Dashboard(){
    return(
        <>
            <div className="dashboard">
                <div className="container">
                    
                    <div className="sidebar">
                        {/* <h2>Sidebar</h2> */}
                        <Sidebar />
                        
                    </div>

                    <div className="left-box">
                        <h2>project details</h2>
                        <PieColor/>
                    
                    </div>

                    <div className="right-box">
                        <h2>calender</h2>
                        <Calendar/>
                        {/* <Calendar onChange={()=> new Date()} className='calendar'></Calendar> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;