import {
  AppShell,
  Barcode,
  Button,
  Card,
  Carousel,
  CodeBlock,
  CopyButton,
  CronInput,
  DocumentInput,
  ErrorBoundary,
  FormControl,
  formatPhoneNumber,
  Icon,
  ImageViewer,
  Indicator,
  JsonViewer,
  Kbd,
  LoadingBar,
  Modal,
  NativeSelect,
  Overlay,
  parsePhoneNumber,
  PhoneInput,
  SegmentedControl,
  SortableList,
  SpeedDial,
  SplitButton,
  SplitPane,
  VisuallyHidden,
  Wizard
} from '@nebular-react/core';
import type {
  CronLocale,
  PhoneCountry,
  PhoneNumberMeta,
  PhoneOutputFormat,
  WizardStep
} from '@nebular-react/core';
import React, { useState } from 'react';

// eslint-disable-next-line no-template-curly-in-string
const sampleCode = 'export function hello(name: string) {\n  return `Hello ${name}`;\n}';

const sampleImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#274bdb"/>
        <stop offset="1" stop-color="#00b887"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#g)"/>
    <text x="40" y="260" fill="#fff" font-family="sans-serif" font-size="42">Nebular ImageViewer</text>
  </svg>`
)}`;

const sampleJson = {
  name: 'nebular-react',
  version: '0.4.0',
  features: ['charts', 'data views', 'forms'],
  stats: { stars: 1200, forks: 180 }
};

const carouselSlides = [
  <div
    key="one"
    style={{ display: 'grid', placeItems: 'center', height: '100%', background: '#eef2ff' }}
  >
    <strong>Slide one</strong>
  </div>,
  <div
    key="two"
    style={{ display: 'grid', placeItems: 'center', height: '100%', background: '#ecfdf5' }}
  >
    <strong>Slide two</strong>
  </div>,
  <div
    key="three"
    style={{ display: 'grid', placeItems: 'center', height: '100%', background: '#fff7ed' }}
  >
    <strong>Slide three</strong>
  </div>
];

export function UtilitiesDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [tracks, setTracks] = useState(['Intro', 'Verse', 'Chorus', 'Bridge', 'Outro']);
  const [wizardCompleted, setWizardCompleted] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState<PhoneCountry>('BR');
  const [phoneFormat, setPhoneFormat] = useState<PhoneOutputFormat>('national');
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneMeta, setPhoneMeta] = useState<PhoneNumberMeta | null>(null);
  const [cronLocale, setCronLocale] = useState<CronLocale>('pt-BR');
  const phoneNational = formatPhoneNumber(phoneValue, {
    country: phoneCountry,
    outputFormat: 'national'
  });
  const phoneInternational = formatPhoneNumber(phoneValue, {
    country: phoneCountry,
    outputFormat: 'international'
  });
  const phoneE164 = formatPhoneNumber(phoneValue, {
    country: phoneCountry,
    outputFormat: 'e164'
  });
  const phoneDigits = parsePhoneNumber(phoneValue);

  const wizardSteps: WizardStep[] = [
    {
      key: 'account',
      title: 'Account',
      description: 'Create the account that will own the workspace.',
      content: <p>Pick a username and a password to get started.</p>
    },
    {
      key: 'workspace',
      title: 'Workspace',
      description: 'Name the workspace your team will use.',
      content: <p>Choose a name that your colleagues will recognize.</p>
    },
    {
      key: 'review',
      title: 'Review',
      description: 'Confirm the details before finishing.',
      content: <p>Everything is ready to be created.</p>
    }
  ];

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>CodeBlock & CopyButton</Card.Header>
          <Card.Body>
            <CodeBlock code={sampleCode} language="ts" title="hello.ts" showLineNumbers copyable />
            <div style={{ marginTop: '0.75rem' }}>
              <CopyButton
                value="npm install @nebular-react/core"
                label="Copy install command"
                copiedLabel="Copied!"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>JsonViewer</Card.Header>
          <Card.Body>
            <JsonViewer data={sampleJson} searchable maxHeight={240} ariaLabel="Package metadata" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Kbd & VisuallyHidden</Card.Header>
          <Card.Body>
            <p>
              Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the command palette.
            </p>
            <p>
              This paragraph has <VisuallyHidden>extra context for screen readers</VisuallyHidden>{' '}
              hidden text.
            </p>
            <LoadingBar loading value={60} position="inline" ariaLabel="Loading progress" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Indicator & Barcode</Card.Header>
          <Card.Body>
            <Indicator label={3}>
              <Button>Inbox</Button>
            </Indicator>
            <div style={{ marginTop: '1rem' }}>
              <Barcode
                value="NEBULAR-2026"
                format="CODE128"
                showValue
                ariaLabel="Product barcode"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>CronInput</Card.Header>
          <Card.Body>
            <SegmentedControl
              ariaLabel="Cron locale"
              fullWidth
              value={cronLocale}
              onChange={(value) => setCronLocale(value as CronLocale)}
              data={[
                { label: 'Português (pt-BR)', value: 'pt-BR' },
                { label: 'English (en-US)', value: 'en-US' }
              ]}
            />
            <div style={{ marginTop: '0.75rem' }}>
              <CronInput label="Schedule" defaultValue="0 9 * * 1-5" presets locale={cronLocale} />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4">
        <Card>
          <Card.Header>DocumentInput</Card.Header>
          <Card.Body>
            <FormControl label="CPF" htmlFor="cpf">
              <DocumentInput id="cpf" documentType="cpf" defaultValue="12345678909" />
            </FormControl>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>PhoneInput</Card.Header>
          <Card.Body>
            <NativeSelect
              label="Country"
              data={['BR', 'US', 'PT', 'AR', 'DE']}
              value={phoneCountry}
              onChange={(value) => setPhoneCountry(value as PhoneCountry)}
            />
            <div style={{ margin: '0.75rem 0' }}>
              <SegmentedControl
                ariaLabel="Output format"
                fullWidth
                value={phoneFormat}
                onChange={(value) => setPhoneFormat(value as PhoneOutputFormat)}
                data={[
                  { label: 'National', value: 'national' },
                  { label: 'International', value: 'international' },
                  { label: 'E.164', value: 'e164' }
                ]}
              />
            </div>
            <FormControl label="Phone" htmlFor="phone">
              <PhoneInput
                id="phone"
                country={phoneCountry}
                outputFormat={phoneFormat}
                withCountryCode={phoneFormat !== 'e164'}
                value={phoneValue}
                onChange={setPhoneValue}
                onChangeMeta={setPhoneMeta}
              />
            </FormControl>
            {phoneMeta && (
              <dl className="row" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                <dt className="col-4">E.164</dt>
                <dd className="col-8" data-testid="phone-e164">
                  {phoneMeta.e164 || '-'}
                </dd>
                <dt className="col-4">Valid</dt>
                <dd className="col-8">{String(phoneMeta.valid)}</dd>
                <dt className="col-4">Possible</dt>
                <dd className="col-8">{String(phoneMeta.possible)}</dd>
              </dl>
            )}
            <hr />
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Helpers:</strong> {phoneNational || '-'} · {phoneInternational || '-'} ·{' '}
              {phoneE164 || '-'} · digits {phoneDigits || '-'}
            </p>
            <FormControl label="Uncontrolled with default country" htmlFor="phone-default">
              <PhoneInput
                id="phone-default"
                defaultCountry="PT"
                allowInternational
                defaultValue="+351912345678"
              />
            </FormControl>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>AppShell</Card.Header>
          <Card.Body>
            <AppShell
              header={<div style={{ padding: '0.5rem' }}>Header</div>}
              navbar={<div style={{ padding: '0.5rem' }}>Navbar</div>}
              aside={<div style={{ padding: '0.5rem' }}>Aside</div>}
              footer={<div style={{ padding: '0.5rem' }}>Footer</div>}
              style={{ height: 260 }}
              ariaLabel="App shell demo"
            >
              <div style={{ padding: '0.5rem' }}>Main content</div>
            </AppShell>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SplitPane</Card.Header>
          <Card.Body>
            <div style={{ height: 180 }}>
              <SplitPane defaultSize={40} separatorLabel="Resize panels">
                <div style={{ padding: '0.5rem' }}>Left panel</div>
                <div style={{ padding: '0.5rem' }}>Right panel</div>
              </SplitPane>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Carousel</Card.Header>
          <Card.Body>
            <Carousel
              slides={carouselSlides}
              height={180}
              withIndicators
              withControls
              ariaLabel="Feature carousel"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Modal & ImageViewer</Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button onClick={() => setModalOpen(true)}>Open modal</Button>
              <Button appearance="outline" onClick={() => setViewerOpen(true)}>
                Open image
              </Button>
            </div>
            <Modal
              opened={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Modal demo"
              footer={<Button onClick={() => setModalOpen(false)}>Close</Button>}
            >
              <p>Modal content rendered through a portal.</p>
            </Modal>
            <ImageViewer
              src={sampleImage}
              alt="Nebular gradient placeholder"
              opened={viewerOpen}
              onOpenChange={setViewerOpen}
              caption="ImageViewer with download support"
              withDownload
              downloadFileName="nebular-placeholder.svg"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Overlay</Card.Header>
          <Card.Body>
            <div
              style={{
                position: 'relative',
                minHeight: 180,
                overflow: 'hidden',
                borderRadius: 8,
                background: 'linear-gradient(135deg, #3366ff, #00d68f)'
              }}
            >
              <div style={{ padding: '1.5rem', color: '#fff' }}>Content behind the overlay</div>
              {overlayVisible && (
                <Overlay fixed={false} color="#101426" opacity={0.65} blur={2} center>
                  <div style={{ padding: '0.75rem 1rem', color: '#fff', textAlign: 'center' }}>
                    <p style={{ marginBottom: '0.5rem' }}>Overlay content</p>
                    <Button size="small" onClick={() => setOverlayVisible(false)}>
                      Dismiss
                    </Button>
                  </div>
                </Overlay>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SortableList</Card.Header>
          <Card.Body>
            <SortableList
              items={tracks}
              keyExtractor={(track) => track}
              onReorder={(next) => setTracks(next)}
              renderItem={(track, index) => (
                <span style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <span>{track}</span>
                  <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>#{index + 1}</span>
                </span>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SplitButton & SpeedDial</Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <SplitButton
                label="Save"
                items={[
                  { key: 'draft', label: 'Save as draft', onClick: () => undefined },
                  { key: 'template', label: 'Save as template', onClick: () => undefined },
                  { key: 'publish', label: 'Publish now', onClick: () => undefined },
                  { key: 'archive', label: 'Archive', disabled: true }
                ]}
                onClick={() => undefined}
              />
              <SpeedDial
                ariaLabel="Quick actions"
                actions={[
                  {
                    key: 'share',
                    label: 'Share',
                    icon: <Icon icon="share-outline" pack="nebular-essentials" />,
                    onClick: () => undefined
                  },
                  {
                    key: 'copy',
                    label: 'Copy link',
                    icon: <Icon icon="copy-outline" pack="nebular-essentials" />,
                    onClick: () => undefined
                  },
                  {
                    key: 'favorite',
                    label: 'Add to favorites',
                    icon: <Icon icon="star-outline" pack="nebular-essentials" />,
                    onClick: () => undefined
                  }
                ]}
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Wizard</Card.Header>
          <Card.Body>
            <Wizard
              steps={wizardSteps}
              onComplete={() => setWizardCompleted(true)}
              onCancel={() => setWizardCompleted(false)}
            />
            <p className="mt-2 mb-0">
              {wizardCompleted ? 'Wizard completed.' : 'Follow the steps to finish.'}
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ErrorBoundary</Card.Header>
          <Card.Body>
            <ErrorBoundary ariaLabel="Protected content">
              <p>This content is protected by an error boundary.</p>
            </ErrorBoundary>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
