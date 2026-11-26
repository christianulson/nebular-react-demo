import {
  Affix,
  AspectRatio,
  BackTop,
  Card,
  Container,
  Flex,
  FloatButton,
  Grid,
  Stack,
  Title,
  Text,
  Paragraph,
  Code,
  Link,
  Blockquote,
  Watermark
} from '@nebular-react/core';
import React, { useRef } from 'react';

const boxStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderRadius: '0.25rem',
  backgroundColor: 'var(--background-basic-color-2, #f7f9fc)',
  border: '1px solid var(--border-basic-color-3, #e4e9f2)',
  color: 'var(--text-basic-color, #222b45)',
  textAlign: 'center'
};

function AffixExample() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={targetRef}
      style={{ height: 220, overflow: 'auto', padding: '0.75rem', border: '1px solid #e4e9f2' }}
    >
      <p>Scroll inside this panel to pin the toolbar.</p>
      <Affix offsetTop={0} target={() => targetRef.current}>
        <div style={{ ...boxStyle, textAlign: 'left' }}>
          <strong>Affixed toolbar</strong>
        </div>
      </Affix>
      <div style={{ height: 700 }} />
    </div>
  );
}

function BackTopExample() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={targetRef}
      style={{ height: 220, overflow: 'auto', padding: '0.75rem', border: '1px solid #e4e9f2' }}
    >
      <p>Scroll inside this panel to reveal the back-to-top button.</p>
      <div style={{ height: 700 }} />
      <BackTop target={() => targetRef.current ?? window} visibilityHeight={100} />
    </div>
  );
}

export function LayoutKitDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Container</Card.Header>
          <Card.Body>
            <Container size="sm" padding="sm">
              <div style={boxStyle}>size sm</div>
            </Container>
            <Container size="md" padding="sm">
              <div style={boxStyle}>size md</div>
            </Container>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Flex</Card.Header>
          <Card.Body>
            <Flex gap="sm" wrap="wrap">
              <div style={boxStyle}>One</div>
              <div style={boxStyle}>Two</div>
              <div style={boxStyle}>Three</div>
            </Flex>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Stack</Card.Header>
          <Card.Body>
            <Stack gap="sm">
              <div style={boxStyle}>First item</div>
              <div style={boxStyle}>Second item</div>
              <div style={boxStyle}>Third item</div>
            </Stack>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Grid</Card.Header>
          <Card.Body>
            <Grid gap="sm">
              <Grid.Col span={4}>
                <div style={boxStyle}>span 4</div>
              </Grid.Col>
              <Grid.Col span={8}>
                <div style={boxStyle}>span 8</div>
              </Grid.Col>
              <Grid.Col span={6}>
                <div style={boxStyle}>span 6</div>
              </Grid.Col>
              <Grid.Col span={6}>
                <div style={boxStyle}>span 6</div>
              </Grid.Col>
            </Grid>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>AspectRatio</Card.Header>
          <Card.Body>
            <AspectRatio ratio={16 / 9}>
              <div style={{ ...boxStyle, height: '100%' }}>16 / 9</div>
            </AspectRatio>
            <div style={{ marginTop: '0.75rem' }}>
              <AspectRatio ratio={1}>
                <div style={{ ...boxStyle, height: '100%' }}>1 / 1</div>
              </AspectRatio>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Affix</Card.Header>
          <Card.Body>
            <AffixExample />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>BackTop</Card.Header>
          <Card.Body>
            <BackTopExample />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Watermark</Card.Header>
          <Card.Body>
            <Watermark text="Nebular">
              <div style={{ ...boxStyle, minHeight: 180 }}>
                <h3>Quarterly report</h3>
                <p>This content is protected by a repeated watermark overlay.</p>
              </div>
            </Watermark>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Typography</Card.Header>
          <Card.Body>
            <Title order={2}>Typography title</Title>
            <Text size="sm" color="hint">
              Small hint text rendered by the Typography component.
            </Text>
            <Paragraph>
              Read the <Code>README</Code> and check the <Link href="#docs">documentation</Link>{' '}
              before running the build.
            </Paragraph>
            <Blockquote>Simplicity is the ultimate sophistication.</Blockquote>
          </Card.Body>
        </Card>
      </div>

      <FloatButton
        icon={<span>+</span>}
        label="Create"
        position="bottom-start"
        onClick={() => undefined}
      />
    </div>
  );
}
