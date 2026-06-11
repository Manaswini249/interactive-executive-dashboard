import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function DepartmentChart() {
  const data = {
    labels: [
      "Marketing",
      "Sales",
      "Finance",
      "HR",
      "Operations"
    ],
    datasets: [
      {
        data: [25, 30, 15, 10, 20],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff"
        ]
      }
    ]
  };

  return <Pie data={data} />;
}
