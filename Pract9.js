import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function Pract9({dataA, dataB, dataC}) {

  let state = {
    labels: ["dataA", "dataB", "dataC"],
    datasets: [
      {
        label: "Record",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: {dataA, dataB, dataC },
      },
    ],
  };

  return (
    <div>
   
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Record",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
     
    </div>
  );
}
