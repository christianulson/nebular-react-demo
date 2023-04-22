import { useNebularTheme } from '@nebular-react/core';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

interface TrafficBarChartProps {
  data: number[];
  labels: string[];
  formatter: string;
}

const _TrafficBarChart = React.forwardRef<ReactECharts, TrafficBarChartProps>(
  ({ data, labels, formatter }: TrafficBarChartProps, ref) => {
    const theme = useNebularTheme();

    const option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: labels,
        axisLabel: {
          color: theme.variables.fgText,
          fontSize: '12'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        show: false,
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        boundaryGap: [0, '5%']
      },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        textStyle: {
          color: theme.variables.fgText,
          fontWeight: 'normal',
          fontSize: 16
        },
        position: 'top',
        backgroundColor: theme.variables.bg,
        borderColor: theme.variables.borderColor2,
        borderWidth: 1,
        formatter,
        extraCssText: 'border-radius: 10px; padding: 4px 16px;'
      },
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          data,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.warningLight
              },
              {
                offset: 1,
                color: theme.variables.warning
              }
            ]),
            opacity: 1,
            shadowColor: theme.variables.warningLight,
            shadowBlur: '0'
          }
        }
      ]
    };

    return (
      <div className="echarts">
        <ReactECharts option={option} style={{ width: '100%', height: '100%' }} ref={ref} />
      </div>
    );
  }
);

export const TrafficBarChart = EChartWithResize(_TrafficBarChart);
