import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import useCalender from "../../store/calendar";
import { createEventId } from "../../store/Data";
import EventModal from "../EventModal";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Import Tippy's default styles;
import TooltipContent from '../TooltipContent';


function Calender() {
  const { currentEvents, setCurrentEvents } = useCalender();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState(null);

  const calendarRef = useRef(null);

  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (title, description, location) => { // Add location parameter
    if (selectInfo) {
      let calendarApi = calendarRef.current.getApi();

      calendarApi.unselect();

      if (title) {
        const newEvent = {
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          extendedProps: {
            description,
            location: location || "No location", // Ensure location is set
          },
        };

        calendarApi.addEvent(newEvent);
        setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
      }
    }
  };

  const handleEventDidMount = (info) => {
    const { event } = info;
    const { title, start, end, extendedProps } = event;
  
    const content = (
      <TooltipContent
        title={title}
        description={extendedProps.description}
        location={extendedProps.location}
        start={start}
        end={end}
      />
    );
  
    tippy(info.el, {
      content: () => {
        const wrapper = document.createElement('div');
        ReactDOM.render(content, wrapper);
        return wrapper;
      },
      theme: 'custom',
      placement: 'top',
      trigger: 'mouseenter',
      arrow: true,
      allowHTML: true,
    });
  };
  const handleEventClick = (clickInfo) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const eventId = clickInfo.event.id;

      // Remove event from FullCalendar
      clickInfo.event.remove();

      // Update state to remove event from `currentEvents`
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
    }
  };

  return (
    <>
      <div className="calendar-container mx-5 mt-4 p-4 h-[85vh] w-[90%]">
        <div className="fullcalendar-wrapper h-full">
          <FullCalendar
            ref={calendarRef}
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,listMonth",
            }}
            allDaySlot={true}
            initialView="dayGridMonth"
            slotDuration="00:30:00"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={1}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            select={handleDateSelect}
            eventDidMount={handleEventDidMount}
            eventClick={handleEventClick} // Add eventClick handler
            height="100%"
            contentHeight="100%"
          />
        </div>
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEvent}
      />
    </>
  );
}

export default Calender;
