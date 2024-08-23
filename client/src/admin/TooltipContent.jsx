import React from 'react';
import locationGif from '../assests/images/location.gif';

const TooltipContent = ({ title, description, location, start, end }) => (
  <div className="tooltip-content max-w-xs">
    <div className="tooltip-title text-center font-bold text-lg mb-1 break-words">
      {title}
    </div>
    <div className="tooltip-description text-sm font-semibold break-words">
      {description || "No description"}
    </div>
    <div className="tooltip-location text-sm font-bold mb-1 break-words flex items-center">
      <img src={locationGif} alt="" className='w-8 h-8'/>
      {location || "No location"}
    </div>
    <div className="tooltip-time text-sm font-semibold mb-2">
      <strong>Start:</strong> {start.toLocaleString()}<br />
      <strong>End:</strong> {end ? end.toLocaleString() : "No end time"}
    </div>
  </div>
);

export default TooltipContent;
