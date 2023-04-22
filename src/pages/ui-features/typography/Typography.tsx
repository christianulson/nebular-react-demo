/* eslint-disable react/jsx-no-target-blank */
import { Alert, Card, DEFAULT_MEDIA_BREAKPOINTS } from '@nebular-react/core';
import { useBreakpoint } from '@nebular-react/hooks';
import React from 'react';
import useStyles from './Typography.styles';

export function TypographyDemo() {
  const { breakpointState } = useBreakpoint();
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, 'row')}>
      <div className="col-md-6 col-xxxl-4">
        <Card size="medium">
          <Card.Header>Used Fonts</Card.Header>
          <Card.Body>
            <div className="font-row">
              <div className="header">
                <div className="name bold">Open Sans</div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-6 col-xxxl-4">
        <Card size="medium" className="headings-card">
          <Card.Header>Headings</Card.Header>
          <Card.Body>
            <div className="header">
              <div>
                <h1>H1. Heading</h1>
              </div>

              <div className="detail">800 2.25rem (36px)</div>
            </div>
            <div className="header">
              <div>
                <h2>H2. Heading</h2>
              </div>

              <div className="detail">800 2rem (32px)</div>
            </div>
            <div className="header">
              <div>
                <h3>H3. Heading</h3>
              </div>

              <div className="detail">800 1.875rem (30px)</div>
            </div>
            <div className="header">
              <div>
                <h4>H4. Heading</h4>
              </div>

              <div className="detail">800 1.625rem (26px)</div>
            </div>
            <div className="header">
              <div>
                <h5>H5. Heading</h5>
              </div>

              <div className="detail">800 1.375rem (22px)</div>
            </div>
            <div className="header">
              <div>
                <h6>H6. Heading</h6>
              </div>

              <div className="detail">800 1.125rem (18px)</div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-6 col-xxxl-4">
        <Card
          size={
            breakpointState.currBreakpoint.width >= DEFAULT_MEDIA_BREAKPOINTS.xxxl
              ? 'medium'
              : 'giant'
          }
          className="article"
        >
          <Card.Header>Article Example</Card.Header>
          <Card.Body>
            <h4>So what&quot;s About the grammar?</h4>
            <p>
              Far far away, behind the word mountains, far from the countries{' '}
              <strong>Vokalia</strong> and <strong>Consonantia</strong>, there live the blind texts.
              They live in <strong>Bookmarksgrove</strong>.
            </p>
            <p>
              A small <strong>river named Duden</strong> flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic country, in which roasted parts of
              sentences fly into your mouth. Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a small line of blind
              text by the name of{' '}
              <a href="http://google.com" target="_blank">
                Lorem Ipsum
              </a>{' '}
              decided to leave for the far <strong>World of Grammar</strong>.
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-6 col-xxxl-4">
        <Card size="large">
          <Card.Header>Font Colors</Card.Header>
          <Card.Body>
            <div className="colors">
              <div className="item text-heading">
                <div className="color bg-heading" />
                <div>
                  <h5 className="text-heading">Heading Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-basic">
                <div className="color bg-basic" />
                <div>
                  <h5 className="text-basic">Body Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-hint">
                <div className="color bg-hint" />
                <div>
                  <h5 className="text-hint">Hint Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-link">
                <div className="color bg-link" />
                <div>
                  <h5 className="text-link">Link Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-primary">
                <div className="color bg-status-primary" />
                <div>
                  <h5 className="text-primary">Primary Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-success">
                <div className="color bg-status-success" />
                <div>
                  <h5 className="text-success">Success Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-info">
                <div className="color bg-status-info" />
                <div>
                  <h5 className="text-info">Info Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-warning">
                <div className="color bg-status-warning" />
                <div>
                  <h5 className="text-warning">Warning Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
              <div className="item text-danger">
                <div className="color bg-status-danger" />
                <div>
                  <h5 className="text-danger">Danger Text</h5>
                  Far far away, behind the your awesomeness.
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-6 col-xxxl-4">
        <Card size="large">
          <Card.Header>Alerts</Card.Header>
          <Card.Body>
            <Alert>
              <strong>Heads up!</strong> This alert needs your attention, but it&quot;s not super
              important.
            </Alert>
            <Alert status="primary">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>
            <Alert status="success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>
            <Alert status="info">
              <strong>Heads up!</strong> This alert needs your attention, but it&quot;s not super
              important.
            </Alert>
            <Alert status="warning">
              <strong>Warning!</strong> Better check yourself, you&quot;re not looking too good.
            </Alert>
            <Alert status="danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </Alert>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-6 col-xxxl-4">
        <Card size="large">
          <Card.Header>Lists</Card.Header>
          <Card.Body className="lists">
            <h4>Ordered List</h4>
            <ol className="mb-5">
              <li>Far far away, behind the word mountains</li>
              <li>Far from the countries Vokalia and Consonantia</li>
              <li>There live the blind texts.</li>
              <li>Right at the coast of the Semantics.</li>
              <li>A small river named Duden flows</li>
            </ol>

            <h4>Unordered List</h4>
            <ul className="mb-5">
              <li>Far far away, behind the word mountains</li>
              <li>Far from the countries Vokalia and Consonantia</li>
              <li>There live the blind texts.</li>
              <li>Right at the coast of the Semantics.</li>
              <li>A small river named Duden flows</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
