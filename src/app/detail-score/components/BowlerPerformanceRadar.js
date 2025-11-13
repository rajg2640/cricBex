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
      offsetX: 0,
      offsetY: 0,
      events: {
        mounted: (chartContext, config) => {
          wrapLabels();
        },
        updated: (chartContext, config) => {
          wrapLabels();
        }
      }
    },
    plotOptions: {
      radar: {
        size: 170,
        offsetX: 40,
        offsetY: 0,
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
    responsive: [
      {
        breakpoint: 1199,
        options: {
          plotOptions: {
            radar: {
              size: 140,
            }
          },
        }
      },
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            radar: {
              size: 120,
              offsetX: 40,
            }
          },
        }
      },
      {
        breakpoint: 991,
        options: {
          plotOptions: {
            radar: {
              size: 100,
              offsetX: 10,
            }
          },
        }
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            radar: {
              size: 170,
              offsetX: 40,
            }
          },
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            radar: {
              size: 120,
              offsetX: 30,
            }
          },
        }
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            radar: {
              size: 100,
              offsetX: 20,
            }
          },
        }
      },
      {
        breakpoint: 375,
        options: {
          plotOptions: {
            radar: {
              size: 80,
              offsetX: 10,
            }
          },
        }
      }
    ],
  };

  const wrapLabels = () => {
    const labels = document.querySelectorAll('.apexcharts-xaxis-label');
    const screenWidth = window.innerWidth;
    const maxWidth = screenWidth < 480 ? 40 : screenWidth < 1199 ? 50 : 150;
    console.log('maxWidth', maxWidth)
    labels.forEach(label => {
      const text = label.textContent;
      const words = text.split(' ');

      // Get the computed width of the label
      const bbox = label.getBBox();
      const labelWidth = bbox.width;

      // Only wrap if label is too wide AND has multiple words
      if (labelWidth > maxWidth && words.length > 1) {
        label.innerHTML = '';
        const x = label.getAttribute('x');
        const y = label.getAttribute('y');
        const textAnchor = label.getAttribute('text-anchor');

        words.forEach((word, index) => {
          const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          tspan.textContent = word;
          tspan.setAttribute('x', x);
          tspan.setAttribute('text-anchor', textAnchor);
          tspan.setAttribute('dy', index === 0 ? '0' : '1.2em');
          label.appendChild(tspan);
        });
      }
    });
  };

  return (
    <div className="w-full xxs:h-[420px] h-[350px]">
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        width="100%"
        height="100%"
        className="bowlerPerformanceChart"
      />
    </div>
  );
};

export default BowlerPerformanceRadar;
