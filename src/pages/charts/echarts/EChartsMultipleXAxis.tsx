import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsMultipleXAxis = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const option = {
      backgroundColor: theme.variables.bg,
      color: [theme.variables.success, theme.variables.info],
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['2015 Precipitation', '2016 Precipitation'],
        textStyle: {
          color: theme.variables.fgText
        }
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: theme.variables.info
            }
          },
          axisLabel: {
            textStyle: {
              color: theme.variables.fgText
            }
          },
          axisPointer: {
            label: {
              formatter: (params) =>
                `Precipitation  ${params.value}${
                  params.seriesData.length ? `：${params.seriesData[0].data}` : ''
                }`
            }
          },
          data: [
            '2016-1',
            '2016-2',
            '2016-3',
            '2016-4',
            '2016-5',
            '2016-6',
            '2016-7',
            '2016-8',
            '2016-9',
            '2016-10',
            '2016-11',
            '2016-12'
          ]
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: theme.variables.success
            }
          },
          axisLabel: {
            textStyle: {
              color: theme.variables.fgText
            }
          },
          axisPointer: {
            label: {
              formatter: (params) =>
                `Precipitation  ${params.value}${
                  params.seriesData.length ? `：${params.seriesData[0].data}` : ''
                }`
            }
          },
          data: [
            '2015-1',
            '2015-2',
            '2015-3',
            '2015-4',
            '2015-5',
            '2015-6',
            '2015-7',
            '2015-8',
            '2015-9',
            '2015-10',
            '2015-11',
            '2015-12'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
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
      series: [
        {
          name: '2015 Precipitation',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '2016 Precipitation',
          type: 'line',
          smooth: true,
          data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
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

export const EChartsMultipleXAxis = EChartWithResize(_EChartsMultipleXAxis);
