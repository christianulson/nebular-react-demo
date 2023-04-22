import { useNebularTheme } from '@nebular-react/core';
import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import useStyles from './CountryOrdersChart.styles';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

interface CountryOrdersChartProps {
  countryId?: string;
}

const _CountryOrdersChart = React.forwardRef<ReactECharts, CountryOrdersChartProps>(
  ({ countryId }: CountryOrdersChartProps, ref) => {
    const theme = useNebularTheme();
    const { classes, cx } = useStyles();
    const data = generateRandomData(5);
    const countriesCategories = ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'];
    const maxValue = 20;

    const option = useMemo(
      () => ({
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          axisLabel: {
            color: theme.variables.fg,
            fontSize: '16'
          },
          axisLine: {
            lineStyle: {
              color: theme.variables.borderColor4,
              width: '2'
            }
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
        yAxis: {
          data: countriesCategories,
          axisLabel: {
            color: theme.variables.fg,
            fontSize: '16'
          },
          axisLine: {
            lineStyle: {
              color: theme.variables.borderColor4,
              width: '2'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            // For shadow
            type: 'bar',
            data: data.map(() => maxValue),
            cursor: 'default',
            itemStyle: {
              color: theme.variables.bg2,
              opacity: 1
            },
            barWidth: '40%',
            barGap: '-100%',
            barCategoryGap: '30%',
            animation: false,
            z: 1
          },
          {
            // For bottom line
            type: 'bar',
            data,
            cursor: 'default',
            itemStyle: {
              color: theme.variables.primary,
              opacity: 1
            },
            barWidth: '40%',
            barGap: '-100%',
            barCategoryGap: '30%',
            z: 2
          },
          {
            type: 'bar',
            barWidth: '35%',
            data,
            cursor: 'default',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: theme.variables.primaryLight
                },
                {
                  offset: 1,
                  color: theme.variables.primary
                }
              ])
            },
            z: 3
          }
        ]
      }),
      [countryId]
    );

    return (
      <div className={cx(classes.root)}>
        <div className="header">
          <span className="caption">Selected Country/Region</span>
          <h2 className="h4">{countryId}</h2>
        </div>
        <div className="echarts">
          <ReactECharts
            option={option}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

function generateRandomData(nPoints: number): number[] {
  return Array.from(Array(nPoints)).map(() => Math.round(Math.random() * 20));
}

export const CountryOrdersChart = EChartWithResize(_CountryOrdersChart);
