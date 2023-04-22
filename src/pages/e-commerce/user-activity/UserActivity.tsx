import { Card, Icon, List, Select } from '@nebular-react/core';
import React, { useMemo, useState } from 'react';
import useStyles from './UserActivity.styles';

interface UserActive {
  date: string;
  pagesVisitCount: number;
  deltaUp: boolean;
  newVisits: number;
}

export function UserActivity() {
  const { classes, cx } = useStyles();
  const types = ['Week', 'Month', 'Year'];
  const [period, setPeriod] = useState<string>('Month');

  const data = useMemo(
    () => ({
      week: [
        { date: 'Mon', pagesVisitCount: 53, deltaUp: false, newVisits: 42 },
        { date: 'Tue', pagesVisitCount: 651, deltaUp: false, newVisits: 0 },
        { date: 'Wed', pagesVisitCount: 695, deltaUp: false, newVisits: 23 },
        { date: 'Thu', pagesVisitCount: 997, deltaUp: false, newVisits: 5 },
        { date: 'Fri', pagesVisitCount: 215, deltaUp: true, newVisits: 65 },
        { date: 'Sat', pagesVisitCount: 210, deltaUp: true, newVisits: 71 },
        { date: 'Sun', pagesVisitCount: 665, deltaUp: true, newVisits: 60 }
      ],
      month: [
        { date: '1 Mar', pagesVisitCount: 430, deltaUp: true, newVisits: 42 },
        { date: '2 Mar', pagesVisitCount: 529, deltaUp: true, newVisits: 55 },
        { date: '3 Mar', pagesVisitCount: 738, deltaUp: true, newVisits: 80 },
        { date: '4 Mar', pagesVisitCount: 563, deltaUp: true, newVisits: 59 },
        { date: '5 Mar', pagesVisitCount: 651, deltaUp: true, newVisits: 44 },
        { date: '6 Mar', pagesVisitCount: 287, deltaUp: false, newVisits: 10 },
        { date: '7 Mar', pagesVisitCount: 853, deltaUp: true, newVisits: 17 },
        { date: '8 Mar', pagesVisitCount: 8, deltaUp: false, newVisits: 37 },
        { date: '9 Mar', pagesVisitCount: 856, deltaUp: true, newVisits: 61 },
        { date: '10 Mar', pagesVisitCount: 939, deltaUp: true, newVisits: 33 },
        { date: '11 Mar', pagesVisitCount: 900, deltaUp: true, newVisits: 25 },
        { date: '12 Mar', pagesVisitCount: 376, deltaUp: false, newVisits: 81 },
        { date: '13 Mar', pagesVisitCount: 956, deltaUp: false, newVisits: 59 },
        { date: '14 Mar', pagesVisitCount: 553, deltaUp: true, newVisits: 21 },
        { date: '15 Mar', pagesVisitCount: 881, deltaUp: false, newVisits: 18 },
        { date: '16 Mar', pagesVisitCount: 846, deltaUp: true, newVisits: 56 },
        { date: '17 Mar', pagesVisitCount: 837, deltaUp: true, newVisits: 70 },
        { date: '18 Mar', pagesVisitCount: 688, deltaUp: true, newVisits: 96 },
        { date: '19 Mar', pagesVisitCount: 340, deltaUp: false, newVisits: 83 },
        { date: '20 Mar', pagesVisitCount: 496, deltaUp: false, newVisits: 100 }
      ],
      year: [
        { date: '2010', pagesVisitCount: 142, deltaUp: true, newVisits: 67 },
        { date: '2011', pagesVisitCount: 776, deltaUp: true, newVisits: 95 },
        { date: '2012', pagesVisitCount: 782, deltaUp: true, newVisits: 89 },
        { date: '2013', pagesVisitCount: 521, deltaUp: true, newVisits: 93 },
        { date: '2014', pagesVisitCount: 951, deltaUp: false, newVisits: 55 },
        { date: '2015', pagesVisitCount: 407, deltaUp: true, newVisits: 89 },
        { date: '2016', pagesVisitCount: 807, deltaUp: true, newVisits: 66 },
        { date: '2017', pagesVisitCount: 945, deltaUp: true, newVisits: 78 },
        { date: '2018', pagesVisitCount: 776, deltaUp: false, newVisits: 14 }
      ]
    }),
    []
  );

  return (
    <Card size="medium" className={cx(classes.root)}>
      <Card.Header>
        <span>User Activity</span>
        <Select
          options={types}
          defaultSelected={period}
          onSelect={(value) => setPeriod(value as string)}
        />
      </Card.Header>

      <List>
        {data[period.toLowerCase()].map((item: UserActive, index: number) => (
          <List.Item key={`user-activity-item-${index}`}>
            <div className="visited-date">{item.date}</div>
            <div className="visited-pages-count">
              <div className="caption">Pages Visit</div>
              <div className="value">{item.pagesVisitCount}</div>
            </div>
            <div className="visited-percentage">
              <div className="caption">New visits, %</div>
              <div className={`delta value ${item.deltaUp ? 'up' : 'down'}`}>
                <Icon icon={item.deltaUp ? 'arrow-up' : 'arrow-down'} pack="eva" />
                {item.newVisits}%
              </div>
            </div>
          </List.Item>
        ))}
      </List>
    </Card>
  );
}
