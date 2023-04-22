import { hexToRgbA, useNebularTheme } from '@nebular-react/styles';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';

export function ChartJsBar() {
  const theme = useNebularTheme();

  ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

  const data = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: hexToRgbA(theme.variables.primaryLight, 0.8)
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: hexToRgbA(theme.variables.infoLight, 0.8)
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          fontColor: theme.variables.fgText
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: theme.variables.fgText
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
    }
  };

  return (
    <div className="chartjs">
      <Bar data={data} options={options as any} />
    </div>
  );
}
