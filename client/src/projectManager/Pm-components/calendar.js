import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import Fullcalendar from '@fullcalendar/react'

function PMCalendar(){
    return (
        <>
            <div className="calendar ">
                <Fullcalendar plugins={[timeGridPlugin,dayGridPlugin,interactionPlugin]}
                
                initialView={'dayGridMonth'}
                />

            </div>
        </>
    );
}

export default PMCalendar;