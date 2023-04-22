import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsBarAnimation = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push(`Category ${i}`);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    const option = {
      backgroundColor: theme.variables.bg,
      color: [theme.variables.primaryLight, theme.variables.infoLight],
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
        textStyle: {
          color: theme.variables.fgText
        }
      },
      xAxis: [
        {
          data: xAxisData,
          silent: false,
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
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5
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

export const EChartsBarAnimation = EChartWithResize(_EChartsBarAnimation);
