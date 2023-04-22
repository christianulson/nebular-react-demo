import { hexToRgbA, useNebularTheme } from '@nebular-react/styles';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, RadialLinearScale } from 'chart.js';

export function ChartJsRadar() {
  const theme = useNebularTheme();

  ChartJS.register(Tooltip, Legend, RadialLinearScale);

  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40],
        label: 'Series A',
        borderColor: theme.variables.danger,
        backgroundColor: hexToRgbA(theme.variables.dangerLight, 0.5)
      },
      {
        data: [28, 48, 40, 19, 96, 27, 100],
        label: 'Series B',
        borderColor: theme.variables.warning,
        backgroundColor: hexToRgbA(theme.variables.warningLight, 0.5)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scaleFontColor: 'white',
    plugins: {
      legend: {
        labels: {
          fontColor: theme.variables.fgText
        }
      }
    },
    scale: {
      pointLabels: {
        fontSize: 14,
        fontColor: theme.variables.fgText
      },
      gridLines: {
        color: theme.variables.separator
      },
      angleLines: {
        color: theme.variables.separator
      }
    }
  };

  return (
    <div className="chartjs">
      <Radar data={data} options={options as any} />
    </div>
  );
}
