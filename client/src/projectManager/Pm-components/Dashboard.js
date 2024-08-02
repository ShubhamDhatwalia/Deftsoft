import React from "react";
import './dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';
import PMCalendar from "./calendar";
import Card from './Card';
function PMDashboard(){
    return(
        <>
            <div className="dashboard">
                <div className="container flex flex-row my-5">

                    <div className="left-box   w-7/12 mx-2">
                        {/* <h2>project details</h2> */}
                        <Card/>
                    </div>

                    <div className="right-box border-l-2 pl-1 w-5/12 mx-3 h-auto">
                        {/* <h2>calender</h2> */}
                        <PMCalendar />
                    </div>


                </div>
            </div>
        </>
    );
}

export default PMDashboard;