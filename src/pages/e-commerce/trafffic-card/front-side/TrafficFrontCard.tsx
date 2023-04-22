import { Icon, List } from '@nebular-react/core';
import React, { useMemo } from 'react';
import { TrafficBar } from './traffic-bar/TrafficBar';
import useStyles from './TrafficFrontCard.styles';

interface TrafficList {
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
}

interface TrafficCardFrontProps {
  period: string;
}

export function TrafficFrontCard({ period }: TrafficCardFrontProps) {
  const { classes, cx } = useStyles();

  const data = useMemo(
    () => ({
      week: [
        {
          date: 'Mon',
          value: 501,
          delta: { up: true, value: 3 },
          comparison: { prevDate: 'Sun', prevValue: 8, nextDate: 'Mon', nextValue: 11 }
        },
        {
          date: 'Tue',
          value: 491,
          delta: { up: true, value: 8 },
          comparison: { prevDate: 'Mon', prevValue: 11, nextDate: 'Tue', nextValue: 19 }
        },
        {
          date: 'Wed',
          value: 827,
          delta: { up: false, value: 10 },
          comparison: { prevDate: 'Tue', prevValue: 19, nextDate: 'Wed', nextValue: 9 }
        },
        {
          date: 'Thu',
          value: 911,
          delta: { up: true, value: 50 },
          comparison: { prevDate: 'Wed', prevValue: 9, nextDate: 'Thu', nextValue: 59 }
        },
        {
          date: 'Fri',
          value: 931,
          delta: { up: false, value: 17 },
          comparison: { prevDate: 'Thu', prevValue: 59, nextDate: 'Fri', nextValue: 42 }
        },
        {
          date: 'Sat',
          value: 195,
          delta: { up: true, value: 38 },
          comparison: { prevDate: 'Fri', prevValue: 42, nextDate: 'Sat', nextValue: 80 }
        },
        {
          date: 'Sun',
          value: 713,
          delta: { up: true, value: 18 },
          comparison: { prevDate: 'Sat', prevValue: 80, nextDate: 'Sun', nextValue: 98 }
        }
      ],
      month: [
        {
          date: 'Jan',
          value: 22,
          delta: { up: true, value: 1 },
          comparison: { prevDate: 'Dec', prevValue: 81, nextDate: 'Jan', nextValue: 82 }
        },
        {
          date: 'Feb',
          value: 883,
          delta: { up: false, value: 58 },
          comparison: { prevDate: 'Jan', prevValue: 82, nextDate: 'Feb', nextValue: 24 }
        },
        {
          date: 'Mar',
          value: 131,
          delta: { up: false, value: 13 },
          comparison: { prevDate: 'Feb', prevValue: 24, nextDate: 'Mar', nextValue: 11 }
        },
        {
          date: 'Apr',
          value: 960,
          delta: { up: true, value: 47 },
          comparison: { prevDate: 'Mar', prevValue: 11, nextDate: 'Apr', nextValue: 58 }
        },
        {
          date: 'May',
          value: 964,
          delta: { up: false, value: 9 },
          comparison: { prevDate: 'Apr', prevValue: 58, nextDate: 'May', nextValue: 49 }
        },
        {
          date: 'Jun',
          value: 178,
          delta: { up: false, value: 15 },
          comparison: { prevDate: 'May', prevValue: 49, nextDate: 'Jun', nextValue: 34 }
        },
        {
          date: 'Jul',
          value: 794,
          delta: { up: false, value: 17 },
          comparison: { prevDate: 'Jun', prevValue: 34, nextDate: 'Jul', nextValue: 17 }
        },
        {
          date: 'Aug',
          value: 272,
          delta: { up: true, value: 33 },
          comparison: { prevDate: 'Jul', prevValue: 17, nextDate: 'Aug', nextValue: 50 }
        },
        {
          date: 'Sep',
          value: 257,
          delta: { up: true, value: 44 },
          comparison: { prevDate: 'Aug', prevValue: 50, nextDate: 'Sep', nextValue: 94 }
        },
        {
          date: 'Oct',
          value: 836,
          delta: { up: false, value: 85 },
          comparison: { prevDate: 'Sep', prevValue: 94, nextDate: 'Oct', nextValue: 9 }
        },
        {
          date: 'Nov',
          value: 397,
          delta: { up: false, value: 5 },
          comparison: { prevDate: 'Oct', prevValue: 9, nextDate: 'Nov', nextValue: 4 }
        },
        {
          date: 'Dec',
          value: 796,
          delta: { up: true, value: 57 },
          comparison: { prevDate: 'Nov', prevValue: 4, nextDate: 'Dec', nextValue: 61 }
        }
      ],
      year: [
        {
          date: '2010',
          value: 863,
          delta: { up: true, value: 38 },
          comparison: { prevDate: '2009', prevValue: 1, nextDate: '2010', nextValue: 39 }
        },
        {
          date: '2011',
          value: 579,
          delta: { up: true, value: 39 },
          comparison: { prevDate: '2010', prevValue: 39, nextDate: '2011', nextValue: 78 }
        },
        {
          date: '2012',
          value: 68,
          delta: { up: false, value: 20 },
          comparison: { prevDate: '2011', prevValue: 78, nextDate: '2012', nextValue: 58 }
        },
        {
          date: '2013',
          value: 702,
          delta: { up: false, value: 54 },
          comparison: { prevDate: '2012', prevValue: 58, nextDate: '2013', nextValue: 4 }
        },
        {
          date: '2014',
          value: 102,
          delta: { up: true, value: 30 },
          comparison: { prevDate: '2013', prevValue: 4, nextDate: '2014', nextValue: 34 }
        },
        {
          date: '2015',
          value: 890,
          delta: { up: true, value: 56 },
          comparison: { prevDate: '2014', prevValue: 34, nextDate: '2015', nextValue: 90 }
        },
        {
          date: '2016',
          value: 194,
          delta: { up: false, value: 67 },
          comparison: { prevDate: '2015', prevValue: 90, nextDate: '2016', nextValue: 23 }
        },
        {
          date: '2017',
          value: 899,
          delta: { up: true, value: 18 },
          comparison: { prevDate: '2016', prevValue: 23, nextDate: '2017', nextValue: 41 }
        },
        {
          date: '2018',
          value: 49,
          delta: { up: false, value: 2 },
          comparison: { prevDate: '2017', prevValue: 41, nextDate: '2018', nextValue: 39 }
        }
      ]
    }),
    []
  );

  return (
    <List className={cx(classes.root)}>
      {data[period.toLowerCase()].map((item: TrafficList, index: number) => (
        <List.Item className="item" key={`item-${index}`}>
          <span>{item.date}</span>
          <span>{item.value}</span>
          <span
            className={cx('delta', {
              up: item.delta.up,
              down: !item.delta.up
            })}
          >
            <Icon icon={item.delta.up ? 'arrow-up' : 'arrow-down'} pack="eva" />
            {item.delta.value}%
          </span>
          <div className="traffic-bar">
            <TrafficBar barData={item.comparison} successDelta={item.delta.up} />
          </div>
        </List.Item>
      ))}
    </List>
  );
}
