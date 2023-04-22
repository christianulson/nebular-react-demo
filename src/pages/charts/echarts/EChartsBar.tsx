import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useNebularTheme } from '@nebular-react/styles';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';

const _EChartsBar = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();

    const option = {
      backgroundColor: theme.variables.bg,
      color: [theme.variables.primaryLight],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
          name: 'Score',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
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

export const EChartsBar = EChartWithResize(_EChartsBar);
