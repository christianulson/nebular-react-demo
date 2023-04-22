import {
  Action,
  Actions,
  Button,
  Card,
  DEFAULT_MEDIA_BREAKPOINTS,
  Icon
} from '@nebular-react/core';
import { useBreakpoint } from '@nebular-react/hooks';
import React, { useState } from 'react';
import useStyles from './SecurityCamera.styles';

interface Camera {
  title: string;
  source: string;
}

export function SecurityCamera() {
  const cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: '/images/camera1.jpg'
    },
    {
      title: 'Camera #2',
      source: '/images/camera2.jpg'
    },
    {
      title: 'Camera #3',
      source: '/images/camera3.jpg'
    },
    {
      title: 'Camera #4',
      source: '/images/camera4.jpg'
    }
  ];

  const [isSingleView, setIsSingleView] = useState<boolean>(false);
  const [selectedCamera, setSelectedCamera] = useState<Camera>(cameras[0]);
  const { breakpointState } = useBreakpoint();
  const { classes, cx } = useStyles();

  return (
    <Card size="giant" className={cx(classes.root)}>
      <Card.Header>
        Security Cameras
        <Button
          size="small"
          className="single-view-button"
          wrapperClassName="single-view-button-wrapper"
          appearance={isSingleView ? 'filled' : 'outline'}
          onClick={() => setIsSingleView(true)}
          prefixIcon={<i className="nb-square" />}
        />
        <Button
          size="small"
          className="grid-view-button"
          appearance={isSingleView ? 'outline' : 'filled'}
          onClick={() => setIsSingleView(false)}
          prefixIcon={<Icon icon="grid" pack="eva" />}
        />
      </Card.Header>

      <div className="grid-container">
        {isSingleView && (
          <div className="single-view">
            <div className="camera" style={{ backgroundImage: `url(${selectedCamera.source})` }}>
              <span className="camera-name">{selectedCamera.title}</span>
            </div>
          </div>
        )}
        {!isSingleView && (
          <div className="grid-view">
            {cameras.map((camera, index) => (
              <div
                key={`camera-${index}`}
                className="camera"
                style={{ backgroundImage: `url(${camera.source})` }}
                onClick={() => {
                  setSelectedCamera(camera);
                  setIsSingleView(true);
                }}
              >
                <span className="camera-name">{camera.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Card.Footer>
        <Actions
          size={
            breakpointState.currBreakpoint.width > DEFAULT_MEDIA_BREAKPOINTS.md ? 'medium' : 'small'
          }
          fullWidth
        >
          <Action icon={<Icon icon="pause-circle-outline" pack="eva" />}>Pause</Action>
          <Action icon={<Icon icon="list-outline" pack="eva" />}>Logs</Action>
          <Action icon={<Icon icon="search-outline" pack="eva" />}>Search</Action>
          <Action icon={<Icon icon="settings-2-outline" pack="eva" />}>Setup</Action>
        </Actions>
      </Card.Footer>
    </Card>
  );
}
