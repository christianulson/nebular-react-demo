import {
  Action,
  Actions,
  Button,
  ButtonGroup,
  ButtonToggle,
  Card,
  Icon,
  User
} from '@nebular-react/core';
import { ComponentShape, ComponentSize, ComponentStatus } from '@nebular-react/styles';
import React, { useState } from 'react';
import useStyles from './Buttons.styles';

export function ButtonsDemo() {
  const [view, setView] = useState('day');
  const [format, setFormat] = useState<string[]>(['bold']);
  const statuses: ComponentStatus[] = ['primary', 'success', 'info', 'warning', 'danger'];
  const shapes: ComponentShape[] = ['rectangle', 'semiround', 'round'];
  const sizes: ComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-lg-12">
        <Card>
          <Card.Header>Hero Buttons</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {statuses.map((status, index) => (
                <Button status={status} appearance="hero" key={`button-status-${index}`}>
                  {status}
                </Button>
              ))}
              <Button disabled appearance="hero">
                Disabled
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Default Buttons</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {statuses.map((status, index) => (
                <Button status={status} key={`default-button-${index}`}>
                  {status}
                </Button>
              ))}
              <Button disabled>Disabled</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Outline Buttons</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {statuses.map((status, index) => (
                <Button status={status} appearance="outline" key={`outline-button-${index}`}>
                  {status}
                </Button>
              ))}
              <Button disabled appearance="outline">
                Disabled
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Ghost Buttons</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {statuses.map((status, index) => (
                <Button status={status} appearance="ghost" key={`ghost-button-${index}`}>
                  {status}
                </Button>
              ))}
              <Button disabled appearance="outline">
                Disabled
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <Card>
          <Card.Header>Loading buttons</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              <Button loading loadingText="Saving...">
                Save
              </Button>
              <Button appearance="outline" loading>
                Refresh
              </Button>
              <Button loading status="success" loadingText="Done">
                Publish
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Button shapes</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {shapes.map((shape, index) => (
                <Button shape={shape} key={`button-shape-${index}`}>
                  {shape}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Button sizes</Card.Header>
          <Card.Body>
            <div className="buttons-row">
              {sizes.map((size, index) => (
                <Button size={size} key={`button-size-${index}`}>
                  {size}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <Card className="actions-card">
          <Card.Header>Action Groups</Card.Header>
          <Card.Body>
            <Actions size="medium">
              <Action aria-label="Menu" title="Menu" icon={<Icon icon="menu-outline" />} />
              <Action aria-label="Search" title="Search" icon={<Icon icon="search-outline" />} />
              <Action aria-label="Messages" title="Messages" icon={<Icon icon="email-outline" />} />
              <Action
                aria-label="Notifications"
                title="Notifications"
                disabled
                icon={<Icon icon="bell-outline" />}
              />
              <Action>
                <User name="Han Solo" />
              </Action>
              <Action
                aria-label="Settings"
                title="Settings"
                icon={<Icon icon="settings-2-outline" />}
              />
            </Actions>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Actions size="medium" fullWidth>
              <Action icon={<Icon icon="pause-circle-outline" className="action-icon" />}>
                <span>Pause</span>
              </Action>
              <Action icon={<Icon icon="list-outline" className="action-icon" />}>
                <span>Logs</span>
              </Action>
              <Action icon={<Icon icon="search-outline" className="action-icon" />}>
                <span>Search</span>
              </Action>
              <Action icon={<Icon icon="settings-2-outline" className="action-icon" />}>
                <span>Setup</span>
              </Action>
            </Actions>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Button Groups</Card.Header>
          <Card.Body>
            <ButtonGroup pressed={view} onChange={(value) => setView(String(value))}>
              <ButtonToggle value="day" pressed={view === 'day'}>
                Day
              </ButtonToggle>
              <ButtonToggle value="week" pressed={view === 'week'}>
                Week
              </ButtonToggle>
              <ButtonToggle value="month" pressed={view === 'month'}>
                Month
              </ButtonToggle>
            </ButtonGroup>

            <div style={{ marginTop: '0.75rem' }}>
              <ButtonGroup<true> multiple pressed={format} onChange={(values) => setFormat(values)}>
                <ButtonToggle value="bold" pressed={format.includes('bold')}>
                  Bold
                </ButtonToggle>
                <ButtonToggle value="italic" pressed={format.includes('italic')}>
                  Italic
                </ButtonToggle>
                <ButtonToggle value="underline" pressed={format.includes('underline')}>
                  Underline
                </ButtonToggle>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
