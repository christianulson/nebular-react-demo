import { Button, Card, Desktop, Icon } from '@nebular-react/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createDemoDesktopWindows, demoDesktopApps, demoDesktopWorkspaces } from './desktop-apps';

export function DesktopDemo() {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <Card.Header>Desktop embedded in the classic layout</Card.Header>
          <Card.Body>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}
            >
              <p style={{ margin: 0, maxWidth: 720 }}>
                This is the classic Nebular demo layout hosting a <code>Desktop</code> window
                manager. The windows below are declared through <code>apps</code> and{' '}
                <code>defaultWindows</code>. The same component can take over the whole screen in
                the fullscreen desktop mode.
              </p>
              <Button size="small" appearance="outline" onClick={() => navigate('/desktop')}>
                <Icon icon="monitor-outline" aria-hidden="true" /> Launch fullscreen mode
              </Button>
            </div>
            <div style={{ height: 600 }}>
              <Desktop
                ariaLabel="Embedded Nebular desktop demo"
                apps={demoDesktopApps}
                defaultWindows={createDemoDesktopWindows()}
                workspaces={demoDesktopWorkspaces}
                defaultWorkspace="main"
                commandPalette
                showOverview
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DesktopDemo;
