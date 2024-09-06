import React from 'react'

export const Holidays = () => {
  return (
    <div className="p-5  w-full bg-green-100 rounded-lg">
    <div className="flex justify-between">
      <p className="font-bold">Upcoming Holidays</p>
    </div>
    <div className="flex flex-col mt-4 gap-2 justify-between">
      {[
        { date: "17 Aug", day: "Rakshabandan day", left: "12 left" },
        {
          date: "29 Oct",
          day: "Diwali day",
          left: 18,
        },
        {
          date: "15 Aug",
          day: "Independence day",
          left: 18,
        },
        {
          date: "26 Jan",
          day: "Republic day",
          left: 18,
        },
      ].map((item, index) => {
        return (
          <div className="flex gap-5 border-b-2 pb-2 w-full">
            <p className="">{item.date}</p>
            <p className="flex-1">{item.day}</p>
            <p className="">{item.left}</p>
          </div>
        );
      })}
    </div>
  </div>
  )
}
