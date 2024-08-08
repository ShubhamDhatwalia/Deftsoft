import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalender from "../../store/calendar";
import { createEventId } from "../../store/Data";
import EventModal from "../EventModal";
import EventDetailsModal from "../EventDetailsModal";

function Calender() {
  const { currentEvents, setCurrentEvents } = useCalender();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const calendarRef = useRef(null);

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

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
          },
        };
  
        calendarApi.addEvent(newEvent);
        setCurrentEvents((prevEvents) => {
          if (Array.isArray(prevEvents)) {
            return [...prevEvents, newEvent];
          }
          return [newEvent];
        });
      }
    }
  };
  

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsDetailsModalOpen(true);
  };

  const handleDeleteEvent = (eventId) => {
    if (calendarRef.current) {
      let calendarApi = calendarRef.current.getApi();

      setCurrentEvents((prevEvents) => {
        if (Array.isArray(prevEvents)) {
          const filteredEvents = prevEvents.filter((event) => event.id !== eventId);
          return filteredEvents;
        }
        return [];
      });

      const event = calendarApi.getEventById(eventId);
      if (event) {
        event.remove();
      }

      setIsDetailsModalOpen(false);
    }
  };

  return (
    <>
      <div className="calendar-container mx-5 p-4 h-[90vh] w-[70vw]">
        <div className="fullcalendar-wrapper h-full">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
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
            eventClick={handleEventClick}
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
      <EventDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        event={selectedEvent}
        onDelete={handleDeleteEvent}
      />
    </>
  );
}

export default Calender;
