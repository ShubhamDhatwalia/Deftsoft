import React from "react";
import { FaUserGroup } from "react-icons/fa6";

import { useState } from "react";
import TeamMates from "./TeamMates";

function TeamMembers() {
  const [selected, setSelected] = useState(null);

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="team w-2/4">
        {
            TeamMates.map((mem) => (
            
            <div className="team-members">
                    <div className="member flex justify-between m-2 bg-blue-200 h-10 items-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 ..."
                onClick={() => handleSelection(mem.id)}>

                <div className="w-11/12">
                    <p className="w-full text-center">{mem.teamLead}'s Team</p>
                </div>

                <span className="block mr-3">+</span>
            
                </div>

                {
                    selected === mem.id 
                    ? <div className="flex flex-col h-auto py-2 justify-between m-2 bg-green-300 rounded-md h-10 items-center hover:-translate-y-1 hover:scale-102 duration-300" >
                        {
                            mem.team.map(teamMem=><p className="flex gap-2"><FaUserGroup />{teamMem}</p>)
                        }
                    </div> 
                    : null
                }
            </div>
        ))
        }
      </div>
    </>
  );
}

export default TeamMembers;
