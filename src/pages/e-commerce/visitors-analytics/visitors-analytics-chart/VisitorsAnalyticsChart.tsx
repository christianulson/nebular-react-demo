import { useNebularTheme } from '@nebular-react/core';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import useStyles from './VisitorAnalyticsChart.styles';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

const _VisitorsAnalyticsChart = React.forwardRef<
  ReactECharts,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const theme = useNebularTheme();
  const { classes, cx } = useStyles();

  const outerLinePoints: number[] = [
    85, 71, 59, 50, 45, 42, 41, 44, 58, 88, 136, 199, 267, 326, 367, 391, 400, 397, 376, 319, 200,
    104, 60, 41, 36, 37, 44, 55, 74, 100, 131, 159, 180, 193, 199, 200, 195, 184, 164, 135, 103, 73,
    50, 33, 22, 15, 11
  ];
  const generateOutlineLineData = () => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const outerLinePointsLength = outerLinePoints.length;
    const monthsLength = months.length;

    return outerLinePoints.map((p, index) => {
      const monthIndex = Math.round(index / 4);
      const label =
        index % Math.round(outerLinePointsLength / monthsLength) === 0 ? months[monthIndex] : '';

      return {
        label,
        value: p
      };
    });
  };

  const data = {
    innerLine: [
      94, 188, 225, 244, 253, 254, 249, 235, 208, 173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
      183, 224, 265, 302, 333, 358, 375, 388, 395, 400, 400, 397, 390, 377, 360, 338, 310, 278, 241,
      204, 166, 130, 98, 71, 49, 32, 20, 13, 9
    ],
    outerLine: generateOutlineLineData()
  };

  const option = {
    grid: {
      left: 40,
      top: 20,
      right: 0,
      bottom: 60
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(0, 0, 0, 0)',
          width: '1'
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
      formatter: (params: any) => Math.round(parseInt(params[0].value, 10)),
      extraCssText: 'border-radius: 10px; padding: 8px 24px;'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      offset: 25,
      data: data.outerLine.map((i) => i.label),
      axisTick: {
        show: false
      },
      axisLabel: {
        color: theme.variables.fg,
        fontSize: '16'
      },
      axisLine: {
        lineStyle: {
          color: theme.variables.borderColor4,
          width: '2'
        }
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: theme.variables.borderColor4,
          width: '1'
        }
      },
      axisLabel: {
        color: theme.variables.fg,
        fontSize: '16'
      },
      axisTick: {
        show: false
      },
      splitLine: {
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
        tooltip: {
          show: false,
          extraCssText: ''
        },
        itemStyle: {
          normal: {
            opacity: 0
          },
          emphasis: {
            opacity: 0
          }
        },
        lineStyle: {
          normal: {
            width: '1',
            type: 'solid',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1)
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.success
              },
              {
                offset: 1,
                color: theme.variables.success
              }
            ]),
            opacity: 1
          }
        },
        data: data.innerLine
      },
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
            width: '6',
            type: 'dotted',
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ffffff'
              },
              {
                offset: 1,
                color: '#ffffff'
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
                color: theme.variables.primary
              },
              {
                offset: 1,
                color: theme.variables.primaryLight
              }
            ])
          }
        },
        data: data.outerLine.map((i) => i.value)
      }
    ]
  };

  return (
    <div className={cx(classes.root)}>
      <div className="echarts">
        <ReactECharts
          option={option}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          ref={ref}
        />
      </div>
    </div>
  );
});

export const VisitorsAnalyticsChart = EChartWithResize(_VisitorsAnalyticsChart);
