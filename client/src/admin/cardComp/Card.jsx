import React, { useState, useRef, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import CountUp from "react-countup";
import { IoClose } from "react-icons/io5";
import Chart from 'react-apexcharts';

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={setExpanded} />
      ) : (
        <CompactCard param={props} setExpanded={setExpanded} />
      )}
    </LayoutGroup>
  );
}

// Function to extract numeric value from the value string
const getNumericValue = (value) => {
  if (typeof value === 'string') {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  }
  return value;
};

// Function to get the prefix from the value string
const getPrefix = (value) => {
  if (typeof value === 'string') {
    const match = value.match(/^[^\d]+/);
    return match ? match[0] : '';
  }
  return '';
};

// Function to get the suffix from the value string
const getSuffix = (value) => {
  if (typeof value === 'string') {
    const match = value.match(/[^\d]+$/);
    return match ? match[0] : '';
  }
  return '';
};

// CompactCard
function CompactCard({ param, setExpanded }) {
  const numericCompleteValue = param.completeValue !== null ? getNumericValue(param.completeValue) : null;
  const numericTotalValue = getNumericValue(param.totalValue);
  const prefix = param.completeValue !== null ? getPrefix(param.completeValue) : getPrefix(param.totalValue);
  const suffix = getSuffix(param.totalValue);

  return (
    <>
      <motion.div
        className={`CompactCard flex flex-1 h-36 ${param.background} p-4 rounded-xl drop-shadow-lg cursor-pointer hover:scale-105 transition duration-200 gap-12`}
        layoutId={`expandableCard-${param.title}`}
        onClick={() => setExpanded(true)}
      >
        <div className="radialBar flex flex-col flex-1 justify-center items-start gap-7">
          <div className="w-14 h-14">
            <CircularProgressbar
              className="font-medium"
              value={param.barValue}
              text={`${param.barValue}%`}
              strokeWidth={8}
            />
          </div>
          <div className="text-base text-orange-500 font-bold"> {param.title} </div>
        </div>
        <div className="details flex flex-1 flex-col justify-between items-end">
          <param.icon size={25} />
          <span className="text-xl w-24 font-bold mb-7">
            <CountUp
              start={0}
              end={numericCompleteValue !== null ? numericCompleteValue : numericTotalValue}
              delay={0}
              duration={5}
              className="text-xl font-bold"
              prefix={prefix}
              suffix={suffix}
            />
            {numericCompleteValue !== null && ` / ${numericTotalValue}`}
          </span>
        </div>
      </motion.div>
    </>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const cardRef = useRef(null);

  // Function to handle clicks outside of the expanded card
  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const data = {
    options:{
      chart:{
        type: "area",
        height: "auto",
      },

      dropShadow:{
        enable: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },

      datalabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },

      grid: {
        show: false,
      },
    }
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        className={`ExpandCard flex flex-col left-56 justify-between items-center ${param.background} p-4 rounded-xl drop-shadow-lg absolute z-10 w-[60vw] h-[70vh]`}
        layoutId={`expandableCard-${param.title}`}
      >
        <div className="flex justify-end w-full">
          <IoClose className="cursor-pointer text-rose-500 hover:scale-125 font-bold " size={30} onClick={() => setExpanded(false)}/>
        </div>
        <span className="text-2xl font-bold mb-5">{param.title}</span>
        <div className="chart-container w-full h-full">
          <Chart series={param.series} type='area' options={data.options} height="90%" width="90%" />
        </div>
      </motion.div>
    </>
  );
}

export default Card;
