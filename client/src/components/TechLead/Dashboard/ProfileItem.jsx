import React, { useState } from "react";
import { CiMail, CiEdit, CiTrash } from "react-icons/ci";

const ProfileItem = ({ name, role, imageUrl, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="profile p-5 flex items-center py-3 border-b hover:bg-slate-400 border-slate-300"
    >
      <img
        src={imageUrl}
        alt=""
        className="flex-shrink-0 w-12 h-12 object-cover rounded-full"
      />
      <div className="ml-4 flex justify-between items-center">
        <div className="mr-16">
          <h5 className="text-[12px]">{name}</h5>
          <p className="text-[10px]">{role}</p>
        </div>
        <div className="flex ml-5 gap-5">
          {isHovered ? (
            <>
              <CiMail className="cursor-pointer" />
              <CiEdit
                className="cursor-pointer"
                onClick={() => onEdit(name, role, imageUrl)}
              />
              <CiTrash
                className="cursor-pointer"
                onClick={() => onDelete(name)}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
