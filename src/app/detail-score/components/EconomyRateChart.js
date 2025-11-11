import React from "react";
import ReactApexChart from "react-apexcharts";

const EconomyRateChart = () => {
    const series = [
        {
            name: "Economy Rate",
            data: [3.7, 3.2, 3.6, 4.1], // Example economy rate values
        },
    ];

    const options = {
        chart: {
            type: "bar",
            toolbar: { show: false }, // hides download menu
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "50%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#FF0000"], // solid red bars
        xaxis: {
            categories: [
                "Tom Straker",
                "William Salzmann",
                "Lachlan Aitken",
                "Toby Gray",
            ],
            labels: {
                style: {
                    colors: "#555",
                    fontSize: "13px",
                    fontWeight: 500,
                },
            },
            axisBorder: { show: true, color: "#666" },
            axisTicks: { show: true, color: "#666" },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#555",
                    fontSize: "13px",
                },
            },
            axisBorder: { show: true, color: "#666" },
            axisTicks: { show: true, color: "#666" },
        },
        grid: {
            yaxis: { lines: { show: false } },
        },
        legend: { show: false },
    };

    return (
        <div className="w-full">
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

export default EconomyRateChart;
