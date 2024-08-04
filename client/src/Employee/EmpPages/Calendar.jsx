import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';

export const Calendar = () => {
  const data = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2021, 5, 1, 10, 0),
    EndTime: new Date(2021, 5, 1, 12, 30),
    IsAllDay: false
  },
  {
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2021, 5, 2, 10, 0),
    EndTime: new Date(2021, 5, 2, 12, 30),
    IsAllDay: false
  }
]
  return (
    <div>
      <ScheduleComponent
        width='100%'
        height='550px'
        currentView='Month'
      eventSettings={{ dataSource: data }}
      >
        <ViewsDirective>
          <ViewDirective option="Day"/>
          <ViewDirective option="Week"/>
          <ViewDirective option="WorkWeek"/>
          <ViewDirective option="Month"/>
          <ViewDirective option="Agenda"/>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    </div>
  )
}
