import { hexToRgbA, useNebularTheme } from '@nebular-react/styles';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, PointElement, LineElement, Filler } from 'chart.js';

export function ChartJsLine() {
  const theme = useNebularTheme();

  ChartJS.register(Tooltip, Legend, PointElement, LineElement, Filler);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: hexToRgbA(theme.variables.primary, 0.3),
        borderColor: theme.variables.primary,
        lineTension: 0.3,
        fill: true
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: hexToRgbA(theme.variables.danger, 0.3),
        borderColor: theme.variables.danger,
        lineTension: 0.3,
        fill: true
      },
      {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Series C',
        backgroundColor: hexToRgbA(theme.variables.info, 0.3),
        borderColor: theme.variables.info,
        lineTension: 0.3,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          color: theme.variables.separator
        },
        ticks: {
          fontColor: theme.variables.fgText
        }
      },
      y: {
        grid: {
          display: true,
          color: theme.variables.separator
        },
        ticks: {
          fontColor: theme.variables.fgText
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          fontColor: theme.variables.fgText
        }
      }
    }
  };

  return (
    <div className="chartjs">
      <Line data={data} options={options as any} />
    </div>
  );
}
