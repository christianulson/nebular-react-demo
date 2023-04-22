import { Card } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './StatusCard.styles';

interface StatusCardProps {
  title: string;
  type: string;
  children?: React.ReactNode;
}

export function StatusCard({ title, type, children }: StatusCardProps) {
  const [on, setOn] = useState<boolean>(true);
  const { classes, cx } = useStyles({ type });

  return (
    <Card
      onClick={() => setOn(!on)}
      className={cx(classes.root, {
        off: !on
      })}
    >
      <div className="icon-container">
        <div className="icon">{children}</div>
      </div>

      <div className="details">
        <div className="title h5">{title}</div>
        <div className="status paragraph-2">{on ? 'ON' : 'OFF'}</div>
      </div>
    </Card>
  );
}
