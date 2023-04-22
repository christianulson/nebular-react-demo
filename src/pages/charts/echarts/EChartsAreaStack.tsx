import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsAreaStack = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const option = {
      backgroundColor: theme.variables.bg,
      color: [
        theme.variables.warningLight,
        theme.variables.infoLight,
        theme.variables.dangerLight,
        theme.variables.successLight,
        theme.variables.primaryLight
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: theme.variables.primary
          }
        }
      },
      legend: {
        data: [
          'Mail marketing',
          'Affiliate advertising',
          'Video ad',
          'Direct interview',
          'Search engine'
        ],
        textStyle: {
          color: theme.variables.fgText
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
          name: 'Mail marketing',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: 0.7 } },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate advertising',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: 0.7 } },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video ad',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: 0.7 } },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct interview',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: 0.7 } },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search engine',
          type: 'line',
          stack: 'Total amount',
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: theme.variables.fgText
              }
            }
          },
          areaStyle: { normal: { opacity: 0.7 } },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
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

export const EChartsAreaStack = EChartWithResize(_EChartsAreaStack);
