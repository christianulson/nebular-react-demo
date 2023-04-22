import { useNebularTheme } from '@nebular-react/core';
import React, { useEffect, useMemo, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

interface ProfitChart {
  chartLabel: string[];
  data: number[][];
}

interface ProfitChartProps {
  period: string;
}

const _ProfitChart = React.forwardRef<ReactECharts, ProfitChartProps>(
  ({ period }: ProfitChartProps, ref) => {
    const theme = useNebularTheme();

    const data = useMemo(
      () => ({
        week: getDataForWeekPeriod(),
        month: getDataForMonthPeriod(),
        year: getDataForYearPeriod()
      }),
      []
    );

    const _option = {
      backgroundColor: theme.variables.bg,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
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
          data: data[period.toLowerCase()].chartLabel,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: theme.variables.borderColor4
            }
          },
          axisLabel: {
            color: theme.variables.fg,
            fontSize: '16'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: theme.variables.borderColor4
            }
          },
          splitLine: {
            lineStyle: {
              color: theme.variables.separator
            }
          },
          axisLabel: {
            color: theme.variables.fg,
            fontSize: '16'
          }
        }
      ],
      series: [
        {
          name: 'Canceled',
          type: 'bar',
          barGap: 0,
          barWidth: '20%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.bg3
              },
              {
                offset: 1,
                color: theme.variables.bg3
              }
            ])
          },
          data: data[period.toLowerCase()].data[0]
        },
        {
          name: 'Payment',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.primary
              },
              {
                offset: 1,
                color: theme.variables.primary
              }
            ])
          },
          data: data[period.toLowerCase()].data[1]
        },
        {
          name: 'All orders',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: theme.variables.success
              },
              {
                offset: 1,
                color: theme.variables.successLight
              }
            ])
          },
          data: data[period.toLowerCase()].data[2]
        }
      ]
    };

    const [option, setOption] = useState<any>(_option);

    useEffect(() => {
      const series = getNewSeries(option.series, data[period.toLowerCase()].data);

      setOption((current: any) => ({
        ...current,
        series
      }));
    }, [period]);

    const getNewSeries = (series: any, _data: number[][]) =>
      series.map((line: any, index: number) => ({
        ...line,
        data: _data[index]
      }));

    return (
      <div className="echarts">
        <ReactECharts option={option} style={{ width: '100%', height: '100%' }} ref={ref} />
      </div>
    );
  }
);

function getDataForWeekPeriod(): ProfitChart {
  return {
    chartLabel: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [getRandomData(7), getRandomData(7), getRandomData(7)]
  };
}

function getDataForMonthPeriod(): ProfitChart {
  return {
    chartLabel: [
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
    ],
    data: [getRandomData(12), getRandomData(12), getRandomData(12)]
  };
}

function getDataForYearPeriod(): ProfitChart {
  return {
    chartLabel: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    data: [getRandomData(9), getRandomData(9), getRandomData(9)]
  };
}

function getRandomData(nPoints: number): number[] {
  return Array.from(Array(nPoints)).map(() => Math.round(Math.random() * 500));
}

export const ProfitChart = EChartWithResize(_ProfitChart);
