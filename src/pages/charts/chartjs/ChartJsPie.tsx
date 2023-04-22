import { useNebularTheme } from '@nebular-react/styles';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export function ChartJsPie() {
  const theme = useNebularTheme();

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: [
          theme.variables.primaryLight,
          theme.variables.infoLight,
          theme.variables.successLight
        ]
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
    }
  };

  return (
    <div className="chartjs">
      <Pie data={data} options={options as any} />
    </div>
  );
}
