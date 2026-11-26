import { useNebularTheme } from '@nebular-react/styles';
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

export function ChartJsBarHorizontal() {
  const theme = useNebularTheme();

  ChartJS.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: theme.variables.infoLight,
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55]
      },
      {
        label: 'Dataset 2',
        backgroundColor: theme.variables.successLight,
        data: [28, 48, 40, 19, 86, 27]
      }
    ]
  };

  const options = {
    indexAxis: 'y',
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
          display: false,
          color: theme.variables.separator
        },
        ticks: {
          fontColor: theme.variables.fgText
        }
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
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
