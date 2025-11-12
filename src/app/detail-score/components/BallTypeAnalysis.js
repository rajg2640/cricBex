import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BallTypeAnalysis = () => {
    const series = [10, 25, 65]; // percentages
    const options = {
        chart: {
            type: "pie",
            toolbar: { show: false },
        },
        labels: ["Slower", "Spin", "Fast"],
        colors: ["#7B61FF", "#00B67A", "#FF4F2F" ],
        legend: { show: false },
        dataLabels: {
            enabled: true,
            formatter: (val, opts) => {
                const label = opts.w.globals.labels[opts.seriesIndex];
                return [label, `${val.toFixed(1)}%`]
            },
            style: {
                fontSize: "16px",
                colors: ["#7B61FF", "#00B67A", "#FF4F2F" ],
            },
            dropShadow: {
                enabled: false
            }
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                customScale: 0.8,
                dataLabels: { offset: 55 },
                startAngle: 90,
                endAngle: -270,
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["#fff"],
        },
    };

    return (
        <div className="w-full flex flex-col items-center">
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                width="340"
            />
            <div className="leading-normal mt-4 w-full space-y-2">
                <p className="flex items-center justify-between text-black-300">Fast: <span className="text-black-400">115 runs, 3 wkts</span></p>
                <p className="flex items-center justify-between text-black-300">Spin: <span className="text-black-400">45 runs, 1 wkt</span></p>
                <p className="flex items-center justify-between text-black-300">Slower: <span className="text-black-400">16 runs, 0 wkts</span></p>
            </div>
        </div>
    );
};

export default BallTypeAnalysis;
