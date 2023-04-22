import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsLine = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const option = {
      backgroundColor: theme.variables.bg,
      color: [theme.variables.danger, theme.variables.primary, theme.variables.info],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      legend: {
        left: 'left',
        data: ['Line 1', 'Line 2', 'Line 3'],
        textStyle: {
          color: theme.variables.fgText
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: theme.variables.fgText
            }
          },
          axisLabel: {
            textStyle: {
              color: theme.variables.fgText
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'log',
          axisLine: {
            lineStyle: {
              color: theme.variables.fgText
            }
          },
          splitLine: {
            lineStyle: {
              color: theme.variables.separator
            }
          },
          axisLabel: {
            textStyle: {
              color: theme.variables.fgText
            }
          }
        }
      ],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          name: 'Line 1',
          type: 'line',
          data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
          name: 'Line 2',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
          name: 'Line 3',
          type: 'line',
          data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
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

export const EChartsLine = EChartWithResize(_EChartsLine);
