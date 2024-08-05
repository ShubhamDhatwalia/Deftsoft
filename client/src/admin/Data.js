import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";


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
                data: [100, 125, 140, 130, 150, 170, 200, 150, 180, 220, 190, 200, 250],
            },
        ],
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
                data: [100, 125, 140, 130, 150, 170, 200],
            },
        ],
    },

    {
        title: "Revenue",
        barValue: 100,
        completeValue: null,
        totalValue: `₹ ${400}M`,
        icon: FaLaptopCode,
        background: "bg-orange-50",
        series: [
            {
                name: "Revenue",
                data: [100, 125, 140, 130, 150, 170, 200],
            },
        ],
    },

    {
        title: "Resources",
        barValue: 100,
        totalValue: 2000,
        completeValue: null,
        icon: FaLaptopCode,
        background: "bg-violet-50",
        series: [
            {
                name: "Resources",
                data: [100, 125, 140, 130, 150, 170, 200],
            },
        ],
    },
]