import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import useCalender from "../../store/calendar";
import { createEventId } from "../../store/Data";
import EventModal from "../EventModal";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Import Tippy's default styles

function Calender() {
  const { currentEvents, setCurrentEvents } = useCalender();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState(null);

  const calendarRef = useRef(null);

  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (title, description) => {
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
            location: "Sample Location", // You can change or add location dynamically
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

    const content = `
      <div class="tooltip-content max-w-xs ">
        <div class="tooltip-title text-center font-bold text-lg mb-1 break-words">${title}</div>
        <div class="tooltip-description text-sm  break-words">
          ${extendedProps.description || "No description"}
        </div>
        <div class="tooltip-location text-sm font-semibold  break-words">
          ${extendedProps.location || "No location"}
        </div>
        <div class="tooltip-time text-sm mb-2">
          <strong>Start:</strong> ${start.toLocaleString()}<br>
          <strong>End:</strong> ${end ? end.toLocaleString() : "No end time"}
        </div>
      </div>
    `;

    tippy(info.el, {
      content: content,
      theme: "custom",
      placement: "top",
      trigger: "mouseenter",
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
      <div className="calendar-container mx-5 p-4 h-[90vh] w-[70vw]">
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
