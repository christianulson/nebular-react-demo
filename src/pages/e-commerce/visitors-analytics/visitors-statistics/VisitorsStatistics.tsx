import { useNebularTheme } from '@nebular-react/core';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import useStyles from './VisitorsStatistics.styles';
import { LegendChart } from '../../legend-chart/LegendChart';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

const _VisitorsStatistics = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();
    const { classes, cx } = useStyles();

    const chartLegend = [
      {
        iconColor: theme.variables.warning,
        title: 'New Visitors'
      },
      {
        iconColor: theme.variables.success,
        title: 'Return Visitors'
      }
    ];

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: ''
      },
      series: [
        {
          name: ' ',
          clockwise: true,
          //hoverAnimation: false,
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['70%', '90%'],
          data: [
            {
              value: 75,
              name: ' ',
              label: {
                //normal: {
                position: 'center',
                formatter: '',
                //textStyle: {
                // fontSize: '22',
                // fontFamily: theme.variables.fontSecondary,
                // fontWeight: '600',
                // color: theme.variables.fgHeading
                //}
                //}
              },
              // tooltip: {
              //   show: false
              // },
              itemStyle: {
                // normal: {
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
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 3
                //}
              },
              // hoverAnimation: false
            },
            {
              value: 25,
              name: ' ',
              // tooltip: {
              //   show: false
              // },
              label: {
                // normal: {
                position: 'inner'
                //}
              },
              itemStyle: {
                //normal: {
                color: theme.variables.layoutBg
                //}
              }
            }
          ]
        },
        {
          name: ' ',
          clockwise: true,
          //hoverAnimation: false,
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['60%', '97%'],
          data: [
            {
              value: 75,
              name: ' ',
              label: {
                // normal: {
                position: 'center',
                formatter: '',
                // textStyle: {
                //   fontSize: '22',
                //   fontFamily: theme.variables.fontSecondary,
                //   fontWeight: '600',
                //   color: theme.variables.fgHeading
                // }
                // }
              },
              // tooltip: {
              //   show: false
              // },
              itemStyle: {
                // normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1)
                // }
              },
              //hoverAnimation: false
            },
            {
              value: 25,
              name: ' ',
              // tooltip: {
              //   show: false
              // },
              label: {
                //normal: {
                position: 'inner'
                //}
              },
              itemStyle: {
                // normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: theme.variables.warning
                  },
                  {
                    offset: 1,
                    color: theme.variables.warningLight
                  }
                ]),
                // shadowColor: 'rgba(0, 0, 0, 0)',
                // shadowBlur: 0,
                // shadowOffsetX: '0',
                // shadowOffsetY: '0'
                //}
              }
            }
          ]
        }
      ]
    };

    return (
      <div className={cx(classes.root)}>
        <h4 className="h1">1,100</h4>
        <div className="visitors-title">New Visitors</div>
        <div className="statistics-chart">
          <div className="echarts">
            <ReactECharts
              option={option}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
              ref={ref}
            />
          </div>
        </div>
        <div className="statistics-footer">
          <div className="chart-values h5">
            <span className="chart-value">25%</span>
            <span className="chart-value">75%</span>
          </div>
          <LegendChart legendItems={chartLegend} />
        </div>
      </div>
    );
  }
);

export const VisitorsStatistics = EChartWithResize(_VisitorsStatistics);
