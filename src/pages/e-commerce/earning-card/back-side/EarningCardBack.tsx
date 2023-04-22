import { Card, useNebularTheme } from '@nebular-react/core';
import React, { useCallback, useMemo, useState } from 'react';
import * as echarts from 'echarts';
import useStyles from './EarningCardBack.styles';
import { EarningPieChart } from './EarningPieChart';

export function EarningCardBack() {
  const theme = useNebularTheme();

  const pieChartData = [
    {
      value: 50,
      name: 'Bitcoin',
      color: theme.variables.success
    },
    {
      value: 25,
      name: 'Tether',
      color: theme.variables.primary
    },
    {
      value: 25,
      name: 'Ethereum',
      color: theme.variables.warning
    }
  ];

  const option = useMemo(
    () =>
      ({
        tooltip: {
          trigger: 'item',
          formatter: ''
        },
        series: [
          {
            name: ' ',
            clockwise: true,
            emphasis: {
              scale: false
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['65%', '100%'],
            data: [
              {
                value: pieChartData[0].value,
                name: pieChartData[0].name,
                label: {
                  position: 'center',
                  formatter: '',
                  fontSize: '22',
                  fontFamily: theme.variables.fontSecondary,
                  fontWeight: '600',
                  color: theme.variables.fgHeading
                },
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: pieChartData[0].color
                    },
                    {
                      offset: 1,
                      color: pieChartData[0].color
                    }
                  ]),
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3
                }
              },
              {
                value: pieChartData[1].value,
                name: pieChartData[1].name,
                label: {
                  position: 'center',
                  formatter: '',
                  fontSize: '22',
                  fontFamily: theme.variables.fontSecondary,
                  fontWeight: '600',
                  color: theme.variables.fgHeading
                },
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: pieChartData[1].color
                    },
                    {
                      offset: 1,
                      color: pieChartData[1].color
                    }
                  ]),
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3
                }
              },
              {
                value: pieChartData[2].value,
                name: pieChartData[2].name,
                label: {
                  position: 'center',
                  formatter: '',
                  fontSize: '22',
                  fontFamily: theme.variables.fontSecondary,
                  fontWeight: '600',
                  color: theme.variables.fgHeading
                },
                tooltip: {
                  show: false
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: pieChartData[2].color
                    },
                    {
                      offset: 1,
                      color: pieChartData[2].color
                    }
                  ]),
                  shadowColor: 'rgba(0, 0, 0, 0)',
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 3
                }
              }
            ]
          }
        ]
      } as any),
    []
  );

  const { classes, cx } = useStyles();
  const [pieData, setPieData] = useState<{ value: number; name: string; color: any }>({
    value: pieChartData[0].value,
    name: pieChartData[0].name,
    color: pieChartData[0].color
  });

  const chartClickHandler = useCallback((_pieData: { value: number; name: string; color: any }) => {
    setPieData({
      value: _pieData.value,
      name: _pieData.name,
      color: _pieData.color
    });
  }, []);

  return (
    <div className={cx(classes.root)}>
      <Card.Header>Earnings</Card.Header>
      <Card.Body>
        <div className="chart-info">
          <div style={{ color: pieData.color }}>{pieData.name}</div>
          <div className="time-period caption">Last week:</div>
          <div className="h6">{pieData.value}%</div>
        </div>
        <EarningPieChart option={option} onChartClick={chartClickHandler} />
      </Card.Body>
    </div>
  );
}
