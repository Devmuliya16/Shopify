import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement,LineElement);

 const labels = [1, 2, 3, 4, 5, 6, 7];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderWidth: 1,
      borderColor: 'black',
    },
  ],
};
const options = {
  maintainAspectRatio: false	// Don't maintain w/h ratio
}

function chart() {
  return (
      <div className="sm:h-4/6 h-2/6 relative">
        <Line data={data} options={options} />
      </div>
  );
}

export default chart;
