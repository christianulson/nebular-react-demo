import { useNebularTheme } from '@nebular-react/styles';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

export function ChartJsMultipleXAxis() {
  const theme = useNebularTheme();

  ChartJS.register(Tooltip, Legend, PointElement, LineElement);

  const random = () => Math.round(Math.random() * 100);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'dataset - big points',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: theme.variables.primary,
        backgroundColor: theme.variables.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
        lineTension: 0.3
      },
      {
        label: 'dataset - individual point sizes',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: theme.variables.dangerLight,
        backgroundColor: theme.variables.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
        lineTension: 0.3
      },
      {
        label: 'dataset - large pointHoverRadius',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: theme.variables.info,
        backgroundColor: theme.variables.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
        lineTension: 0.3
      },
      {
        label: 'dataset - large pointHitRadius',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: theme.variables.success,
        backgroundColor: theme.variables.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
        lineTension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontColor: theme.variables.fgText
        }
      }
    },
    hover: {
      mode: 'index'
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        },
        grid: {
          display: true,
          color: theme.variables.separator
        },
        ticks: {
          fontColor: theme.variables.fgText
        }
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
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
      <Line data={data} options={options as any} />
    </div>
  );
}
