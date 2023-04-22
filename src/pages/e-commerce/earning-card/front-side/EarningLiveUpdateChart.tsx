import { useNebularTheme } from '@nebular-react/core';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

interface EarningLiveUpdateChartProps {
  selectedCurrency: string;
}

const _EarningLiveUpdateChart = React.forwardRef<ReactECharts, EarningLiveUpdateChartProps>(
  ({ selectedCurrency }: EarningLiveUpdateChartProps, ref) => {
    // eslint-disable-next-line no-spaced-func
    const [chartData, setChartData] = useState<{ value: (string | number)[] }[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval>>();
    const currentDate = useRef<Date>(new Date());
    const currentValue = useRef<number>(Math.random() * 1000);

    const getDefaultLiveChartData = (elementsNumber: number) => {
      currentDate.current = new Date();
      currentValue.current = Math.random() * 1000;

      return Array.from(Array(elementsNumber)).map(() => generateRandomLiveChartData());
    };

    useEffect(() => {
      setChartData(getDefaultLiveChartData(150));
    }, [selectedCurrency]);

    const generateRandomLiveChartData = () => {
      currentDate.current = new Date(+currentDate.current + 24 * 3600 * 1000);
      currentValue.current = currentValue.current + Math.random() * 20 - 11;

      if (currentValue.current < 0) {
        currentValue.current = Math.random() * 100;
      }

      return {
        value: [
          [
            currentDate.current.getFullYear(),
            currentDate.current.getMonth(),
            currentDate.current.getDate()
          ].join('/'),
          Math.round(currentValue.current)
        ]
      };
    };

    const theme = useNebularTheme();
    const option = {
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
      xAxis: {
        type: 'time',
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
          show: false
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
          show: false
        }
      },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        textStyle: {
          color: theme.variables.fgText,
          fontWeight: 'normal',
          fontSize: '16'
        },
        position: 'top',
        backgroundColor: theme.variables.bg,
        borderColor: theme.variables.borderColor2,
        borderWidth: '1',
        formatter: (params: any) => `$ ${Math.round(parseInt(params.value[1], 10))}`,
        extraCssText: 'border-radius: 10px; padding: 4px 16px'
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            opacity: 0
          },
          emphasis: {
            itemStyle: {
              opacity: 0
            }
          },
          lineStyle: {
            width: 0
          },
          areaStyle: {
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
            opacity: 1
          },
          data: chartData
        }
      ],
      animation: false
    } as any;

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        const newValue = generateRandomLiveChartData();
        setChartData((current) => {
          current.shift();
          current.push(newValue);
          return [...current];
        });
      }, 1000);

      return () => {
        clearInterval(intervalRef.current);
      };
    }, []);

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

export const EarningLiveUpdateChart = EChartWithResize(_EarningLiveUpdateChart);
