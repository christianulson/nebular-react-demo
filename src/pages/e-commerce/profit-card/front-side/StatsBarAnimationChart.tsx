import { useNebularTheme } from '@nebular-react/core';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

const _StatsBarAnimationChart = React.forwardRef<
  ReactECharts,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const theme = useNebularTheme();
  const data = {
    firstLine: getDataForFirstLine(),
    secondLine: getDataForSecondLine()
  };
  const option = {
    color: [theme.variables.primary, theme.variables.success],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    legend: {
      data: ['transactions', 'orders'],
      borderWidth: 0,
      borderRadius: 0,
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: theme.variables.fgText
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
      formatter: (params: any) => `$ ${Math.round(parseInt(params.value, 10))}`,
      extraCssText: 'border-radius: 10px; padding: 4px 16px;'
    },
    xAxis: [
      {
        data: data.firstLine.map((_, index) => index),
        silent: false,
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
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
            opacity: '1',
            width: '1'
          }
        }
      }
    ],
    series: [
      {
        name: 'transactions',
        type: 'bar',
        data: data.firstLine,
        animationDelay: (idx: number) => idx * 10
      },
      {
        name: 'orders',
        type: 'bar',
        data: data.secondLine,
        animationDelay: (idx: number) => idx * 10 + 100
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: (idx: number) => idx * 5
  } as any;

  return <ReactECharts option={option} style={{ width: '100%', height: '100%' }} ref={ref} />;
});

// export { StatsBarAnimationChart };

function getDataForFirstLine(): number[] {
  return createEmptyArray(100).map((_, index) => {
    const oneFifth = index / 5;

    return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
  });
}

function getDataForSecondLine(): number[] {
  return createEmptyArray(100).map((_, index) => {
    const oneFifth = index / 5;

    return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
  });
}

function createEmptyArray(nPoints: number) {
  return Array.from(Array(nPoints));
}

export const StatsBarAnimationChart = EChartWithResize(_StatsBarAnimationChart);
