import { Button, Card, Icon, ProgressBar } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './ProgressBar.styles';

export function ProgressBarDemo() {
  const [value, setValue] = useState<number>(25);
  const { classes, cx } = useStyles();

  const getStatus = () => {
    if (value <= 25) {
      return 'danger';
    }
    if (value <= 50) {
      return 'warning';
    }
    if (value <= 75) {
      return 'info';
    }
    return 'success';
  };

  return (
    <div className={cx(classes.root)}>
      <Card>
        <Card.Header>Progress Bar Status</Card.Header>
        <Card.Body>
          <ProgressBar value={20} status="primary">
            primary
          </ProgressBar>
          <ProgressBar value={40} status="info">
            info
          </ProgressBar>
          <ProgressBar value={60} status="success">
            success
          </ProgressBar>
          <ProgressBar value={80} status="warning">
            warning
          </ProgressBar>
          <ProgressBar value={100} status="danger">
            danger
          </ProgressBar>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Progress Bar Interactive</Card.Header>
        <Card.Body>
          <div className="progress-bar-container">
            <Button
              appearance="ghost"
              disabled={!(value > 0)}
              prefixIcon={<Icon icon="minus" pack="eva" />}
              onClick={() => setValue(value - 25)}
            />
            <ProgressBar
              value={value}
              status={getStatus()}
              displayValue
              className="interactive-progress-bar"
            />
            <Button
              appearance="ghost"
              disabled={!(value < 100)}
              prefixIcon={<Icon icon="plus" pack="eva" />}
              onClick={() => setValue(value + 25)}
            />
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Progress Bar Size</Card.Header>
        <Card.Body>
          <ProgressBar value={20} size="tiny">
            tiny
          </ProgressBar>
          <ProgressBar value={40} size="small">
            small
          </ProgressBar>
          <ProgressBar value={60} size="medium">
            medium
          </ProgressBar>
          <ProgressBar value={80} size="large">
            large
          </ProgressBar>
          <ProgressBar value={100} size="giant">
            giant
          </ProgressBar>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Progress Bar Value</Card.Header>
        <Card.Body>
          <ProgressBar value={40} status="primary" displayValue />
          <ProgressBar value={60} status="primary">
            Custom text
          </ProgressBar>
        </Card.Body>
      </Card>
    </div>
  );
}
