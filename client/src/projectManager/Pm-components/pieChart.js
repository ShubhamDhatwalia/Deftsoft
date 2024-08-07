import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const PieChart=()=>{
    
  Chart.register(ArcElement);

  const data = {
    datasets: [
      {
        data: [20, 10, 25, 15],
        backgroundColor: [
          '#96CEB4',
          '#FFAD60',
          '#FFEEAD',
          '#A02334'
        ],
        display: true,
        borderColor: "#D1D6DC"
      }
    ]

  };


    return(
    <>
    <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              enabled: true
            }
          },
          rotation: -90,
          circumference: 180,
          cutout: "80%",
          maintainAspectRatio: false,
          responsive: true
        }}
      />
      {/* <div className="heading graph border-2 ">Progress Graph</div>   */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
      </div>
      
      </>
  );
};
    

export default PieChart