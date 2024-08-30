import { Deadline } from "../EmpComp/Deadline";
import { Holidays } from "../EmpComp/Holidays";
import { Leaves } from "../EmpComp/Leaves";
import { Overview } from "../EmpComp/Overview";
import { WeeklyProgress } from "../EmpComp/Progress";
import { TaskOverview } from "../EmpComp/TaskOverview";
// import Paper from '@mui/material/Paper';



export const Dashboard = () => {
  return (
    <div className="bg-white border-2 p-5">
      <div>
        <p className="text-[20px] font-bold">Hello Jane</p>
        <p className="opacity-50">Today is Tuesday - 5 AUGUST, 2024 </p>
      </div>
      <div className="grid mt-5 grid-cols-3 gap-4">
        <div className="flex flex-col gap-3 col-span-2">
          <Overview />
          <TaskOverview />
          <Deadline />
        </div>
        <div className="border-2">
          <div className="flex flex-col gap-3 col-span-2">
            <Holidays />
            <WeeklyProgress />
            <Leaves />
          </div>
        </div>
      </div>
    </div>
  );
};
