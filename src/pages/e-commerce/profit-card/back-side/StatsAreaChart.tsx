import { useNebularTheme } from '@nebular-react/core';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import * as echarts from 'echarts';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

const _StatsAreaChart = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();
    const data: number[] = [300, 520, 435, 530, 730, 620, 660, 860];
    const option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data
      },
      yAxis: {
        boundaryGap: [0, '5%'],
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.variables.separator,
            width: '1'
          }
        }
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
        formatter: '$ {c0}',
        extraCssText: 'border-radius: 10px; padding: 4px 16px;'
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          symbolSize: 8,
          sampling: 'average',
          silent: true,
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0
            }
          },
          lineStyle: {
            width: 2,
            color: 'rgba(0, 0, 0, 0)'
          },
          data: data.map((p) => p - 15)
        },
        {
          type: 'line',
          symbol: 'circle',
          symbolSize: 6,
          sampling: 'average',
          itemStyle: {
            color: theme.variables.borderColor4,
            borderColor: theme.variables.borderColor4,
            borderWidth: 2
          },
          emphasis: {
            itemStyle: {
              color: 'white',
              borderColor: theme.variables.primary,
              borderWidth: 2
            }
          },
          lineStyle: {
            width: 2,
            color: theme.variables.borderColor4,
            shadowColor: theme.variables.borderColor4,
            shadowBlur: '1'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.bg2
              },
              {
                offset: 1,
                color: theme.variables.bg2
              }
            ]),
            opacity: 1
          },
          data
        }
      ]
    };

    return (
      <div className="echarts">
        <ReactECharts
          option={option}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          ref={ref}
        />
      </div>
    );
  }
);

export const StatsAreaChart = EChartWithResize(_StatsAreaChart);
