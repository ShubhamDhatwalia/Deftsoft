
import React, { useState, useEffect, useRef } from "react";
import { LuLogOut } from "react-icons/lu";
import avtar from '../assests/images/avtar.png';

const SideDrawer = () => {
  const [showProfile, setShowProfile] = useState(false);
  const drawerRef = useRef(null);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={drawerRef}>
        <button
          className="flex items-center text-black focus:outline-none"
          onClick={toggleProfile}
        >
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10  rounded-full hover:border-blue-300 border-2 border-white transition duration-300"
              src={avtar} // Replace it with user's avatar
              alt="User Avatar"
            />
          </div>
        </button>
        {showProfile && (
          <div className="absolute border shadow-2xl flex flex-col justify-between p-4 right-[-80px] mt-2 w-72  rounded-xl bg-white z-10">
            <div className="flex flex-col justify-around gap-2">
              <div className="flex items-center py-2 px-4 border-2 mb-3 hover:border-blue-200 hover:bg-blue-200 rounded-lg overflow-hidden cursor-pointer">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={avtar} // Replace with user's avatar
                    alt="User Avatar"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-500">
                    john.doe@example.com
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h4 className="p-2 rounded-lg hover:bg-blue-200 cursor-pointer">
                  User ID: 12345678
                </h4>
                <h4 className="p-2 rounded-lg hover:bg-blue-200 cursor-pointer">
                  Designation:
                </h4>
              </div>
            </div>
            <button className="flex w-full text-black-600 text- py-2 pr-2 items-center font-medium gap-2 rounded-lg hover:bg-rose-500 bg-slate-200">
              <LuLogOut size={24} className="text-black-600  ml-4 " />
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};


export default SideDrawer;


