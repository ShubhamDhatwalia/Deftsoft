import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import useCalender from '../../store/calendar';
import { createEventId } from '../../store/Data';

function Calender() {

  const {currentEvents, setCurrentEvents} = useCalender();

  const handleEvents = async (events) =>{
    await Promise.resolve(setCurrentEvents(events))
  }


  const handleDateSelect = (selectInfo)=>{
    let title = prompt("please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if(title){
      calendarApi.addEvent({
        id:createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay
      })
    }
  }

  return (
    <>
      <div className="calendar-container mx-5 p-4 my-1 h-[90vh] w-[70vw]">
        <div className="fullcalendar-wrapper h-full">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            allDaySlot={true}
            initialView="dayGridMonth"
            slotDuration="01:00:00"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleDateSelect}
            height="100%"
            contentHeight="100%"
          />
        </div>
      </div>
    </>
  );
}

export default Calender;
