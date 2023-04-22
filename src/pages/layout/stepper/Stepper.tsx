import { Button, Card, Stepper } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './Stepper.styles';

export function StepperDemo() {
  const { classes, cx } = useStyles();
  const [active1, setActive1] = useState<number>(0);
  const [active2, setActive2] = useState<number>(0);
  const [active3, setActive3] = useState<number>(0);

  return (
    <div className={cx(classes.root)}>
      <Card className="col-md-12 col-lg-12 col-xxxl-12">
        <Card.Body>
          <Stepper
            orientation="horizontal"
            activeStepIndex={active1}
            onStepChange={setActive1}
            buttons={
              <div className="nav-buttons">
                <Button
                  disabled={active1 === 0}
                  onClick={() => setActive1(Math.max(0, active1 - 1))}
                >
                  prev
                </Button>
                <Button
                  disabled={active1 === 3}
                  onClick={() => setActive1(Math.min(4, active1 + 1))}
                >
                  next
                </Button>
              </div>
            }
          >
            <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
              <Stepper.Header>First Step</Stepper.Header>
              <h3>Step content #1</h3>
            </Stepper.Step>
            <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
              <Stepper.Header>Second Step</Stepper.Header>
              <h3>Step content #2</h3>
            </Stepper.Step>
            <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
              <Stepper.Header>Third Step</Stepper.Header>
              <h3>Step content #3</h3>
            </Stepper.Step>
            <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
              <Stepper.Header>Fourth Step</Stepper.Header>
              <h3>Step content #4</h3>
            </Stepper.Step>
          </Stepper>
        </Card.Body>
      </Card>

      <div className="row">
        <div className="col-md-12 col-lg-6 col-xxxl-6">
          <Card>
            <Card.Body>
              <Stepper
                orientation="horizontal"
                activeStepIndex={active2}
                onStepChange={setActive2}
                buttons={
                  <div className="nav-buttons">
                    <Button
                      disabled={active2 === 0}
                      onClick={() => setActive2(Math.max(0, active2 - 1))}
                    >
                      prev
                    </Button>
                    <Button
                      disabled={active2 === 3}
                      onClick={() => setActive2(Math.min(4, active2 + 1))}
                    >
                      {active2 < 3 ? 'next' : 'finish'}
                    </Button>
                  </div>
                }
                completedContent={
                  <div className="step-complete">
                    <h3>Wizard completed!</h3>
                    <Button onClick={() => setActive2(0)}>Try again</Button>
                  </div>
                }
              >
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>First Step</Stepper.Header>
                  <p>
                    Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down.
                    Nullizzle sapien velizzle, my shizz pimpin&quot;, shizzle my nizzle crocodizzle
                    shut the shizzle up, gravida vizzle, dang.
                  </p>
                </Stepper.Step>
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>Second Step</Stepper.Header>
                  <p>
                    Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down.
                    Nullizzle sapien velizzle, my shizz pimpin&quot;, shizzle my nizzle crocodizzle
                    shut the shizzle up, gravida vizzle, dang.
                  </p>
                </Stepper.Step>
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>Third Step</Stepper.Header>
                  <p>
                    Lorizzle ipsum dolizzle stuff fizzle, consectetuer adipiscing break it down.
                    Nullizzle sapien velizzle, my shizz pimpin&quot;, shizzle my nizzle crocodizzle
                    shut the shizzle up, gravida vizzle, dang.
                  </p>
                </Stepper.Step>
              </Stepper>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-6 col-xxxl-6">
          <Card size="medium">
            <Card.Body>
              <Stepper
                orientation="vertical"
                activeStepIndex={active3}
                onStepChange={setActive3}
                buttons={
                  <div className="nav-buttons">
                    <Button
                      disabled={active3 === 0}
                      onClick={() => setActive3(Math.max(0, active3 - 1))}
                    >
                      prev
                    </Button>
                    <Button
                      disabled={active3 === 3}
                      onClick={() => setActive3(Math.min(4, active3 + 1))}
                    >
                      next
                    </Button>
                  </div>
                }
              >
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>First Step</Stepper.Header>
                  <h3>Step content #1</h3>
                  <p>
                    Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur
                    egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum
                    lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis,
                    commodo vel placerat quis, lobortis in ligula.
                  </p>
                </Stepper.Step>
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>Second Step</Stepper.Header>
                  <h3>Step content #2</h3>
                  <p>
                    Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur
                    egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum
                    lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis,
                    commodo vel placerat quis, lobortis in ligula.
                  </p>
                </Stepper.Step>
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>Third Step</Stepper.Header>
                  <h3>Step content #3</h3>
                  <p>
                    Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur
                    egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum
                    lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis,
                    commodo vel placerat quis, lobortis in ligula.
                  </p>
                </Stepper.Step>
                <Stepper.Step styles={{ step: { textAlign: 'center' } }}>
                  <Stepper.Header>Fourth Step</Stepper.Header>
                  <h3>Step content #4</h3>
                  <p className="lorem">
                    Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur
                    egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum
                    lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis,
                    commodo vel placerat quis, lobortis in ligula.
                  </p>
                </Stepper.Step>
              </Stepper>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
