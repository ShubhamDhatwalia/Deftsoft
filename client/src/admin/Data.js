import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";

export const CardsData = [
  {
    title: "Users",
    barValue: 100,
    completeValue: null,
    totalValue: 200,
    background: "bg-teal-50",
    icon: FaUsers,
    series: [
      {
        name: "Users",
        data: [120, 70, 80, 100, 150, 170, 200, ],
      },
    ],
   

    chartOptions: {
      chart: {
        type: "bar",
        height: "auto",
      },

      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '40%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024, ],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
         
      dropShadow: {
        enable: false,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      

      grid: {
        show: true,
      },
    },
  },



  {
    title: "Projects",
    barValue: 70,
    completeValue: "162/",
    totalValue: 175,
    icon: FaLaptopCode,
    background: "bg-lime-100",
    series: [
      {
        name: "Projects",
        data: [100, 125, 140, 130, 150, 170, 200, 150, 140, 160, 180, 140],
      },
    ],

    

    chartOptions: {
      chart: {
        type: "area",
        height: "auto",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      dropShadow: {
        enable: false,
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
    },
  },

  {
    title: "Revenue",
    barValue: 100,
    completeValue: null,
    totalValue: `₹ ${400}M`,
    icon: FaMoneyBillTrendUp,
    background: "bg-orange-50",
    series: [
      {
        name: "Revenue",
        data: [100, 125, 140, 130, 150, 170, 200],
      },
    ],

    chartOptions: {
      chart: {
        type: "bar",
        height: "auto",
      },

      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '40%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024, ],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
         
      dropShadow: {
        enable: false,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      

      grid: {
        show: true,
      },
    },
  },

  {
    title: "Resources",
    barValue: 100,
    totalValue: 2000,
    completeValue: null,
    icon: FaBusinessTime,
    background: "bg-violet-50",
    series: [
      {
        name: "Resources",
        data: [2000, 1800, 1600, 1700, 1900, 2100, 2200, 2500, 2300, 2400, 2700, 2800],
      },
    ],

    chartOptions: {
      chart: {
        type: "area",
        height: "auto",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      dropShadow: {
        enable: false,
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
    },
  },
];