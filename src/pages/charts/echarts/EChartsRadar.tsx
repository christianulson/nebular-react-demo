import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsRadar = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const option = {
      backgroundColor: theme.variables.bg,
      color: [theme.variables.danger, theme.variables.warning],
      tooltip: {},
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
        textStyle: {
          color: theme.variables.fgText
        }
      },
      radar: {
        name: {
          textStyle: {
            color: theme.variables.fgText
          }
        },
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Techology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ],
        splitArea: {
          areaStyle: {
            color: 'transparent'
          }
        }
      },
      series: [
        {
          name: 'Budget vs Spending',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    };

    return (
      <div style={{ position: 'relative', height: theme.card_height_medium }}>
        <ReactECharts
          option={option}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          ref={ref}
        />
      </div>
    );
  }
);

export const EChartsRadar = EChartWithResize(_EChartsRadar);
