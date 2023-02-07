import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { randomNumber } from "./utils/randomNumber";
import { shuffle } from "./utils/shuffle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// this displays the chart and its results found on the dashboard
function BarChart(): JSX.Element {
  const [data, setData] = useState({
    datasets: [],
  } as any);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "US Dollar Sales",
          data: shuffle([
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
            randomNumber(5000, 25000),
          ]),
          borderColor: "rgb(0, 153, 255)",
          backgroundColor: "rgb(0, 153, 255, 0.5",
        },
      ],
    });

    setChartOptions({
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      responsive: true,
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-black">
      <Bar data={data} options={chartOptions} />
    </div>
  );
}

export default BarChart;
