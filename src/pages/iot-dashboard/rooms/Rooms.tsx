import { Card, DEFAULT_MEDIA_BREAKPOINTS, Icon } from '@nebular-react/core';
import { useBreakpoint } from '@nebular-react/hooks';
import React, { useState } from 'react';
import { Player } from './player/Player';
import { RoomSelector } from './room-selector/RoomSelector';
import useStyles from './Rooms.styles';

export function Rooms() {
  const { breakpointState } = useBreakpoint();
  const { classes, cx } = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Card
      className={cx(classes.root, { expanded })}
      size={
        breakpointState.currBreakpoint.width >= DEFAULT_MEDIA_BREAKPOINTS.sm ? 'giant' : 'medium'
      }
    >
      <Icon
        icon="arrow-ios-downward"
        pack="eva"
        onClick={() => setExpanded(!expanded)}
        className="toggle"
      />
      <RoomSelector />
      <Player
        collapsed={
          !expanded && breakpointState.currBreakpoint.width <= DEFAULT_MEDIA_BREAKPOINTS.md
        }
      />
    </Card>
  );
}
