import React, { useState } from 'react'
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RunRateChart = () => {

    const [series, setSeries] = useState([
        {
            name: "runs",
            data: [7, 10, 8, 9, 4, 5, 4, 7, 6, 1, 12, 15, 10, 5, 7, 6, 2, 10, 15],
        },
    ]);

    const options = {
        chart: {
            type: "bar",
            toolbar: {
                show: false, // ✅ hides the entire download / zoom / pan menu
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "75%",
                borderRadius: 4,
                borderRadiusApplication: "end",
            },
        },
        colors: ["#FF4F2F"],
        grid: {
            show: false,
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        fill: { opacity: 1 },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
        legend: { position: "top", horizontalAlign: "right" },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    plotOptions: { bar: { columnWidth: "100%" } },
                    legend: { position: "bottom" },
                },
            },
        ],
    };

    return (
        <div id="chart" className='px-3.5'>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                width="100%"
            />
        </div>
    )
}

export default RunRateChart