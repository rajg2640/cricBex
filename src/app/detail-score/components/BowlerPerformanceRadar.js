import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BowlerPerformanceRadar = () => {
  const series = [
    {
      name: "Bowler Performance",
      data: [8, 10, 7, 9], // customize scores
    },
  ];

  const options = {
    chart: {
      type: "radar",
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      radar: {
        size: 180,
        polygons: {
          strokeColors: '#e8e8e8',
        }
      }
    },
    xaxis: {
      categories: ["Shaheen Afridi", "Haris Rauf", "Shadab Khan", "Mohammad Nawaz"],
      labels: { show: true },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: { show: true },
    },
    fill: {
      opacity: 0.3,
      colors: ["#FF4F2F"],
    },
    stroke: {
      width: 1,
      colors: ["#FF4F2F"],
    },
    markers: {
     size: 0,
    },
    grid: { show: false },
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        width="100%"
        className="bowlerPerformanceChart"
      />
    </div>
  );
};

export default BowlerPerformanceRadar;
