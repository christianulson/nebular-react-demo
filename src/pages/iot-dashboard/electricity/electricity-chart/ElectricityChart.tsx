import { useNebularTheme } from '@nebular-react/styles';
import React, { useMemo } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';
import useStyles from './ElectricityChart.styles';

const _ElectricityChart = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();
    const { classes, cx } = useStyles();

    const chartPoints = [
      490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630, 720, 800, 840, 860, 870, 870, 860, 840,
      800, 720, 200, 145, 130, 130, 145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350,
      340, 340, 340, 340, 340, 340, 340, 340, 340
    ];

    const chartData = useMemo(
      () =>
        chartPoints.map((p, index) => ({
          label: index % 5 === 3 ? `${Math.round(index / 5)}` : '',
          value: p
        })),
      []
    );

    const option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 80
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: theme.variables.fgText,
            width: '0'
          }
        },
        textStyle: {
          color: theme.variables.fgText,
          fontSize: 20,
          fontWeight: 'normal'
        },
        position: 'top',
        backgroundColor: theme.variables.bg,
        borderColor: theme.variables.borderColor2,
        borderWidth: 1,
        formatter: '{c0} kWh',
        extraCssText: 'border-radius: 10px; padding: 8px 24px;'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 25,
        data: chartData.map((i) => i.label),
        axisTick: {
          show: false
        },
        axisLabel: {
          color: theme.variables.fg,
          fontSize: 18
        },
        axisLine: {
          lineStyle: {
            color: theme.variables.borderColor3,
            width: '2'
          }
        }
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
      series: [
        {
          type: 'line',
          smooth: true,
          symbolSize: 20,
          itemStyle: {
            normal: {
              opacity: 0
            },
            emphasis: {
              color: '#ffffff',
              borderColor: theme.variables.primary,
              borderWidth: 2,
              opacity: 1
            }
          },
          lineStyle: {
            normal: {
              width: '4',
              type: 'solid',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: theme.variables.primary
                },
                {
                  offset: 1,
                  color: theme.variables.primary
                }
              ]),
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 6,
              shadowOffsetY: 12
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: theme.variables.bg2
                },
                {
                  offset: 1,
                  color: theme.variables.bg2
                }
              ])
            }
          },
          data: chartData.map((i) => i.value)
        },

        {
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            normal: {
              width: '4',
              type: 'solid',
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: theme.variables.primary
                },
                {
                  offset: 1,
                  color: theme.variables.primary
                }
              ]),
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 14,
              opacity: 1
            }
          },
          data: chartData.map((i) => i.value)
        }
      ]
    };

    return (
      <div className={cx(classes.root)}>
        <ReactECharts
          option={option}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          ref={ref}
        />
      </div>
    );
  }
);

export const ElectricityChart = EChartWithResize(_ElectricityChart);
