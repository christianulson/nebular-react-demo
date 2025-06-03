import { Card, useNebularTheme } from '@nebular-react/core';
import React from 'react';
import * as echarts from 'echarts';
import ReactECharts, { EChartsOption } from 'echarts-for-react';
import { EChartWithResize } from '../../../components/echarts-with-resize/EChartsWithResize';
import useStyles from './Solar.styles';

const _Solar = React.forwardRef<ReactECharts, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    const theme = useNebularTheme();
    const { classes, cx } = useStyles();

    const value = 42;

    const option: EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: ' ',
          clockwise: true,
          //hoverAnimation: false,
          type: 'pie',
          center: ['45%', '50%'],
          radius: ['80%', '90%'],
          data: [
            {
              value,
              name: ' ',
              label: {
                //normal: {
                position: 'center',
                formatter: '{d}%',

                // fontSize: '22',
                // fontFamily: theme.variables.fontSecondary,
                // fontWeight: '600',
                // color: theme.variables.fgHeading

                //}
              },
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
                ]),
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 3
              }
            },
            {
              value: 100 - value,
              name: ' ',
              label: {

                position: 'inner'

              },
              itemStyle: {

                color: theme.variables.bg2

              }
            }
          ]
        },
        {
          name: ' ',
          clockwise: true,

          type: 'pie',
          center: ['45%', '50%'],
          radius: ['80%', '90%'],
          data: [
            {
              value,
              name: ' ',
              label: {

                position: 'inner',
                show: false

              },

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
                ]),
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 7

              }

            },
            {
              value: 28,
              name: ' ',
              label: {

                position: 'inner'

              },
              itemStyle: {

                color: 'none'

              }
            }
          ]
        }
      ]
    };

    return (
      <Card size="tiny" className={cx(classes.root)}>
        <Card.Header>Solar Energy Consumption</Card.Header>
        <Card.Body>
          <ReactECharts
            option={option}
            style={{ position: 'absolute', left: '1em', width: '40%', height: 'calc(100% - 2rem)' }}
            ref={ref}
          />
          <div className="info">
            <div className="h4 value">6.421 kWh</div>
            <div className="details subtitle-2">
              <span>out of</span> 8.421 kWh
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
);

export const Solar = EChartWithResize(_Solar);
