import { Card, ProgressBar } from '@nebular-react/core';
import React from 'react';
import useStyles from './ProgressSection.styles';

interface ProgressInfo {
  title: string;
  value: number;
  activeProgress: number;
  description: string;
}

export function ProgressSection() {
  const { classes, cx } = useStyles();

  const progressInfoData: ProgressInfo[] = [
    {
      title: 'Today’s Profit',
      value: 572900,
      activeProgress: 70,
      description: 'Better than last week (70%)'
    },
    {
      title: 'New Orders',
      value: 6378,
      activeProgress: 30,
      description: 'Better than last week (30%)'
    },
    {
      title: 'New Comments',
      value: 200,
      activeProgress: 55,
      description: 'Better than last week (55%)'
    }
  ];

  return (
    <Card size="medium" className={cx(classes.root)}>
      <Card.Body>
        {progressInfoData.map((item, index) => (
          <div className="progress-info" key={`progress-item-${index}`}>
            <div className="subtitle">{item.title}</div>
            <div className="h3">{Intl.NumberFormat().format(item.value)}</div>
            <ProgressBar value={item.activeProgress} />
            <div className="caption description">
              <bdi>{item.description}</bdi>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
