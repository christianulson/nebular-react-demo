import { Button, Card, Icon, Tooltip } from '@nebular-react/core';
import React, { useRef } from 'react';
import useStyles from './Tooltip.styles';

export function TooltipDemo() {
  const { classes, cx } = useStyles();

  const tooltipRef1 = useRef<HTMLButtonElement>(null);
  const tooltipRef2 = useRef<HTMLButtonElement>(null);

  const topRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);
  const bottomRef = useRef<HTMLButtonElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);

  const defaultRef = useRef<HTMLButtonElement>(null);
  const primaryRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLButtonElement>(null);
  const infoRef = useRef<HTMLButtonElement>(null);
  const warningRef = useRef<HTMLButtonElement>(null);
  const dangerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Tooltip With Icon</Card.Header>
          <Card.Body>
            <Button ref={tooltipRef1}>Show Tooltip</Button>
            <Tooltip
              triggerRef={tooltipRef1}
              content="This is a tooltip"
              icon={<Icon icon="home-outline" />}
            />
            <Button ref={tooltipRef2}>Show Tooltip</Button>
            <Tooltip
              triggerRef={tooltipRef2}
              status="danger"
              icon={<Icon icon="alert-triangle" />}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Tooltip Placements</Card.Header>
          <Card.Body>
            <Button ref={topRef}>Top</Button>
            <Tooltip triggerRef={topRef} content="This is a tooltip" position="top" />
            <Button ref={rightRef}>Right</Button>
            <Tooltip triggerRef={rightRef} content="This is a tooltip" position="right" />
            <Button ref={bottomRef}>Bottom</Button>
            <Tooltip triggerRef={bottomRef} content="This is a tooltip" position="bottom" />
            <Button ref={leftRef}>Left</Button>
            <Tooltip triggerRef={leftRef} content="This is a tooltip" position="left" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Colored Tooltips</Card.Header>
          <Card.Body>
            <Button ref={defaultRef}>Default</Button>
            <Tooltip triggerRef={defaultRef} content="This is a tooltip" position="top" />
            <Button ref={primaryRef}>Primary</Button>
            <Tooltip
              triggerRef={primaryRef}
              content="This is a tooltip"
              position="top"
              status="primary"
            />
            <Button ref={successRef}>Success</Button>
            <Tooltip
              triggerRef={successRef}
              content="This is a tooltip"
              position="top"
              status="success"
            />
            <Button ref={dangerRef}>Danger</Button>
            <Tooltip
              triggerRef={dangerRef}
              content="This is a tooltip"
              position="top"
              status="danger"
            />
            <Button ref={infoRef}>Info</Button>
            <Tooltip
              triggerRef={infoRef}
              content="This is a tooltip"
              position="top"
              status="info"
            />
            <Button ref={warningRef}>Warning</Button>
            <Tooltip
              triggerRef={warningRef}
              content="This is a tooltip"
              position="top"
              status="warning"
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
