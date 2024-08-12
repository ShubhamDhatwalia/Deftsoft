import React from "react";
import "./roundProgressBar.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function RoundProgressBar({value}) {
    const radius = 20;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    let strokeColor;
    if(value>=90) strokeColor = "#387F39"
    else if(value<90 && value>=70) strokeColor = "#074173"
    else if(value<70 && value>=40) strokeColor = "#F6FB7A"
    else if(value<40) strokeColor = "#ff0000"

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            className="donut-progress-bar"
        >
            <circle
                stroke="#e5e7eb"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke={strokeColor}
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-0 text-blue-600 text-sm"
            >
                {value}%
            </text> */}
        </svg>
    );
}

export default RoundProgressBar;
