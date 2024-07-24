import React from "react";
import './dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-calendar/dist/Calendar.css';

function Dashboard(){
    return(
        <>
            <div className="dashboard">
                <div className="container">
                    
                    <div className="sidebar">
                        <h2>Sidebar</h2>
                    </div>

                    <div className="left-box">
                        <h2>project details</h2>
                    </div>

                    <div className="right-box">
                        <h2>calender</h2>
                        <Calendar onChange={()=> new Date()} className='calendar'></Calendar>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;