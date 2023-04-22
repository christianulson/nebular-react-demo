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

  const random = () => Math.round(Math.random() * 100);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: theme.variables.infoLight,
        borderWidth: 1,
        data: [random(), random(), random(), random(), random(), random()]
      },
      {
        label: 'Dataset 2',
        backgroundColor: theme.variables.successLight,
        data: [random(), random(), random(), random(), random(), random()]
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
