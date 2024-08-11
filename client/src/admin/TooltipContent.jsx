import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const TooltipContent = ({ title, description, location, start, end }) => (
  <div className="tooltip-content max-w-xs">
    <div className="tooltip-title text-center font-bold text-lg mb-1 break-words">
      {title}
    </div>
    <div className="tooltip-description text-sm font-semibold break-words">
      {description || "No description"}
    </div>
    <div className="tooltip-location text-sm font-bold mb-1 break-words flex items-center">
      <FaLocationDot className="mr-1 text-red-600" />
      {location || "No location"}
    </div>
    <div className="tooltip-time text-sm font-semibold mb-2">
      <strong>Start:</strong> {start.toLocaleString()}<br />
      <strong>End:</strong> {end ? end.toLocaleString() : "No end time"}
    </div>
  </div>
);

export default TooltipContent;
