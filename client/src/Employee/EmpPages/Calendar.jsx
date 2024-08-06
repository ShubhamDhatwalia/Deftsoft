import React from 'react'
import {Inject, ScheduleComponent, ViewsDirective, Day, Week, Year,   Month, Agenda} from "@syncfusion/ej2-react-schedule"
const data = [{
  Id: 1,
  Subject: "Sales Representation",
  StartTime: new Date('2024, 4, 08, 10, 0'),
  EndTime: new Date('2024, 6, 08, 12, 30'),
  IsAllDay: false,
},
{
  Id: 1,
  Subject: "Sales Representation",
  StartTime: new Date('2025, 1, 11, 10, 0'),
  EndTime: new Date('2025, 1, 11, 10, 0'),
  IsAllDay: true,
  Status: "Completed",
  Priority: "High "
}]
export const Calendar = () => {
  return (
    <div>
      <ScheduleComponent 
      width="100%"
      currentView='Month'
      eventSettings={{
        dataSource: data
      }}>
        <ViewsDirective>
          <ViewsDirective option="Day"/>
          <ViewsDirective option="Week"/>
          <ViewsDirective option="Year"/>
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Year, Agenda  ]}/>
      </ScheduleComponent>
    </div>
  )
}
