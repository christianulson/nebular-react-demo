import { Button, Card, Popover, Tabset } from '@nebular-react/core';
import React, { useRef } from 'react';
import useStyles from './Popover.styles';

export function PopoverDemo() {
  const { classes, cx } = useStyles();

  const leftTriggerRef = useRef<HTMLButtonElement>(null);
  const topTriggerRef = useRef<HTMLButtonElement>(null);
  const bottomTriggerRef = useRef<HTMLButtonElement>(null);
  const rightTriggerRef = useRef<HTMLButtonElement>(null);

  const clickTriggerRef = useRef<HTMLButtonElement>(null);
  const hoverTriggerRef = useRef<HTMLButtonElement>(null);
  const hintTriggerRef = useRef<HTMLButtonElement>(null);

  const tabsTriggerRef = useRef<HTMLButtonElement>(null);
  const formTriggerRef = useRef<HTMLButtonElement>(null);
  const cardTriggerRef = useRef<HTMLButtonElement>(null);

  const eventTriggerRef1 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef2 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef3 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef4 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef5 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef6 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef7 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef8 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef9 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef10 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef11 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef12 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef13 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef14 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef15 = useRef<HTMLButtonElement>(null);
  const eventTriggerRef16 = useRef<HTMLButtonElement>(null);

  return (
    <div className={cx(classes.root)}>
      <div className="row">
        <div className="col-lg-6">
          <Card size="small">
            <Card.Header>Popover Position</Card.Header>
            <Card.Body>
              <p>
                When popover has not enough space based on the configured placement, it will adjust
                accordingly trying to fit the screen.
              </p>
              <Button status="danger" ref={leftTriggerRef}>
                Left
              </Button>
              <Popover triggerRef={leftTriggerRef} trigger="hint" position="left">
                Hello, how are you today?
              </Popover>
              <Button status="danger" ref={topTriggerRef}>
                Top
              </Button>
              <Popover triggerRef={topTriggerRef} trigger="hint" position="top">
                Hello, how are you today?
              </Popover>
              <Button status="danger" ref={bottomTriggerRef}>
                Bottom
              </Button>
              <Popover triggerRef={bottomTriggerRef} trigger="hint" position="bottom">
                Hello, how are you today?
              </Popover>
              <Button status="danger" ref={rightTriggerRef}>
                Right
              </Button>
              <Popover triggerRef={rightTriggerRef} trigger="hint" position="right">
                Hello, how are you today?
              </Popover>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card size="small">
            <Card.Header>Simple Popovers</Card.Header>
            <Card.Body>
              <p>In a simples form popover can take a string of text to render.</p>
              <Button status="success" ref={clickTriggerRef}>
                on click
              </Button>
              <Popover triggerRef={clickTriggerRef}>Hello, how are you today?</Popover>
              <Button status="success" ref={hoverTriggerRef}>
                on hover
              </Button>
              <Popover triggerRef={hoverTriggerRef} trigger="hover">
                Hello, how are you today?
              </Popover>
              <Button status="success" ref={hintTriggerRef}>
                on hint
              </Button>
              <Popover triggerRef={hintTriggerRef} trigger="hint">
                Hello, how are you today?
              </Popover>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <Card size="small">
            <Card.Header>Template Popovers</Card.Header>
            <Card.Body>
              <p>You can pass a refference to `ng-template` to be rendered.</p>
              <Button status="warning" ref={tabsTriggerRef}>
                With tabs
              </Button>
              <Popover triggerRef={tabsTriggerRef}>
                <Tabset>
                  <Tabset.Tab title="What's up?">
                    <div className="p-4">Such a wonderful day!</div>
                  </Tabset.Tab>
                  <Tabset.Tab title="Second Tab">
                    <div className="p-4">Indeed!</div>
                  </Tabset.Tab>
                </Tabset>
              </Popover>
              <Button status="warning" ref={formTriggerRef}>
                With form
              </Button>
              <Popover triggerRef={formTriggerRef}>
                <div className="p-4">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Recipients" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Message" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Send
                    </button>
                  </form>
                </div>
              </Popover>
              <Button status="warning" ref={cardTriggerRef}>
                With card
              </Button>
              <Popover triggerRef={cardTriggerRef}>
                <Card className={cx(classes.popoverCard)}>
                  <Card.Header>Hello!</Card.Header>
                  <Card.Body>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean.
                  </Card.Body>
                </Card>
              </Popover>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>Event Debouncing</Card.Header>
            <Card.Body>
              <p>
                Quickly move mouse cursor over the buttons, only the last popover will be created.
                It allows us to avoid excess white improving page performance.
              </p>
              <Button ref={eventTriggerRef1}>show hint</Button>
              <Popover triggerRef={eventTriggerRef1} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef2}>show hint</Button>
              <Popover triggerRef={eventTriggerRef2} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef3}>show hint</Button>
              <Popover triggerRef={eventTriggerRef3} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef4}>show hint</Button>
              <Popover triggerRef={eventTriggerRef4} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef5}>show hint</Button>
              <Popover triggerRef={eventTriggerRef5} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef6}>show hint</Button>
              <Popover triggerRef={eventTriggerRef6} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef7}>show hint</Button>
              <Popover triggerRef={eventTriggerRef7} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef8}>show hint</Button>
              <Popover triggerRef={eventTriggerRef8} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef9}>show hint</Button>
              <Popover triggerRef={eventTriggerRef9} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef10}>show hint</Button>
              <Popover triggerRef={eventTriggerRef10} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef11}>show hint</Button>
              <Popover triggerRef={eventTriggerRef11} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef12}>show hint</Button>
              <Popover triggerRef={eventTriggerRef12} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef13}>show hint</Button>
              <Popover triggerRef={eventTriggerRef13} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef14}>show hint</Button>
              <Popover triggerRef={eventTriggerRef14} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef15}>show hint</Button>
              <Popover triggerRef={eventTriggerRef15} trigger="hint">
                Popover!
              </Popover>
              <Button ref={eventTriggerRef16}>show hint</Button>
              <Popover triggerRef={eventTriggerRef16} trigger="hint">
                Popover!
              </Popover>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
