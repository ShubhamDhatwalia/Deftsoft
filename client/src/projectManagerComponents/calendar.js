import Fullcalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarPM(){
    return(
        <>
            <Fullcalendar
            plugins={[timeGridPlugin, dayGridPlugin,interactionPlugin]}
            initialView={'dayGridMonth'}/>
        </>
    )
}

export default CalendarPM;