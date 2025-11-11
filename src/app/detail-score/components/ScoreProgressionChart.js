"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ScoreProgressionChart = () => {
  const [series] = useState([
    {
      name: "IND",
      data: [0, 10, 22, 35, 40, 42, 45, 60, 75, 85, 100, 115, 130, 145, 150, 160, 170, 178, 182],
    },
    {
      name: "AUS",
      data: [0, 8, 18, 28, 32, 35, 40, 52, 60, 70, 80, 92, 100, 110, 118, 125, 132, 138, 140],
    },
  ]);

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      // curve: "smooth", // ✅ smooth line
      width: 3,
    },
    colors: ["#FF4F2F", "#00B36B"], // ✅ IND (red-orange) & AUS (green)
    markers: {
      size: 5,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 7 },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 4,
      row: { colors: ["transparent"], opacity: 0.5 },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 14,
        height: 14,
        radius: 4,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    xaxis: {
      categories: Array.from({ length: 19 }, (_, i) => i + 1),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: "#666" },
      },
      title: {
        text: "",
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#666" },
      },
      min: 0,
      max: 200,
      tickAmount: 4,
    },
    tooltip: {
      theme: "light",
      x: { show: true },
      y: {
        formatter: (val) => `${val} runs`,
      },
    },
  };

  return (
    <div id="chart">
      <h6 className='text-lg leading-7 font-bold text-black-100 absolute top-6'>Run Rate (IND)</h6>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={360}
        width="100%"
      />
    </div>
  );
};

export default ScoreProgressionChart;
