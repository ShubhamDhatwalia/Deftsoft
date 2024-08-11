import React, { useState, useRef, useEffect } from "react";
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
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

function Calender() {
  const { currentEvents, setCurrentEvents } = useCalender();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectInfo, setSelectInfo] = useState(null);

  const calendarRef = useRef(null);

  // Request Notification Permission
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
      });
    }
  }, []);

  const handleDateSelect = (info) => {

    setSelectInfo(info);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (title, description, location, color) => {

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
          backgroundColor: color, // Set the event color
          borderColor: color, // Set border color to match event color
          extendedProps: {
            description,
            location: location || "No location", // Ensure location is set
          },
        };


        calendarApi.addEvent(newEvent);
        setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);

        // Set a reminder 10 minutes before the event starts
        const startTime = new Date(selectInfo.start);
        const reminderTime = new Date(startTime.getTime() - 10 * 60 * 1000);
        const currentTime = new Date();


        const timeUntilReminder = reminderTime.getTime() - currentTime.getTime();


        if (timeUntilReminder > 0) {

          setTimeout(() => {
            if (Notification.permission === "granted") {
              new Notification("Event Reminder", {
                body: `Your event "${title}" starts in 10 minutes.`,
              });
            }
            // Show toast notification
            toast(`"${title}" starts in 10 minutes.`, {
              duration: 5000,
              style: {
                background: "#fde047",
                fontWeight: "bold",
              },
            });
          }, timeUntilReminder);
        }
      }
    }
  };

  const handleEventDidMount = (info) => {
    const { event } = info;
    const { title, start, end, extendedProps, backgroundColor } = event;

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

    // Set the event color
    info.el.style.backgroundColor = backgroundColor;
    info.el.style.borderColor = backgroundColor;
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
      <div className="calendar-container flex items-center justify-center mx-auto mt-4 p-4 h-[85vh] w-[90%]">
        <div className="fullcalendar-wrapper w-full h-full">
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
      <Toaster /> {/* Add the Toaster component for react-hot-toast */}
    </>
  );
}

export default Calender;
