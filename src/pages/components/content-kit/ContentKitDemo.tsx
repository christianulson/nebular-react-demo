import {
  AvatarEditor,
  Button,
  Card,
  FileManager,
  Form,
  FormControl,
  ImageCropper,
  Input,
  Markdown,
  Mentions,
  OrgChart,
  SignaturePad,
  Timepicker,
  useForm
} from '@nebular-react/core';
import type { FileNode, OrgNode } from '@nebular-react/core';
import React, { useState } from 'react';

const sampleImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#274bdb"/>
        <stop offset="1" stop-color="#00b887"/>
      </linearGradient>
    </defs>
    <rect width="900" height="600" fill="url(#g)"/>
    <circle cx="450" cy="300" r="160" fill="rgba(255,255,255,0.22)"/>
    <text x="60" y="560" fill="#fff" font-family="sans-serif" font-size="36">Nebular media</text>
  </svg>`
)}`;

const markdown = [
  '## Release notes',
  '',
  'This release adds **Mentions**, *Markdown* and `SignaturePad` components.',
  '',
  '- Mentions with keyboard navigation',
  '- Markdown rendered without `dangerouslySetInnerHTML`',
  '',
  '> Small steps keep the suite green.',
  '',
  '[Read the docs](https://example.com/docs)'
].join('\n');

const people = [
  { id: 'ana', label: 'Ana Silva' },
  { id: 'bruno', label: 'Bruno Costa' },
  { id: 'carla', label: 'Carla Dias' }
];

const fileItems: FileNode[] = [
  {
    id: 'documents',
    name: 'Documents',
    type: 'folder',
    modifiedAt: '2026-11-15T12:00:00Z',
    children: [
      {
        id: 'report',
        name: 'annual-report.pdf',
        type: 'file',
        size: 1_572_864,
        modifiedAt: '2026-11-14T12:00:00Z'
      },
      {
        id: 'notes',
        name: 'meeting-notes.txt',
        type: 'file',
        size: 4096,
        modifiedAt: '2026-11-10T12:00:00Z'
      }
    ]
  },
  {
    id: 'images',
    name: 'Images',
    type: 'folder',
    modifiedAt: '2026-11-12T12:00:00Z',
    children: [
      {
        id: 'hero',
        name: 'hero.png',
        type: 'file',
        size: 524_288,
        modifiedAt: '2026-11-12T12:00:00Z'
      }
    ]
  }
];

const orgNodes: OrgNode[] = [
  {
    id: 'ceo',
    title: 'Ada Lovelace',
    subtitle: 'Chief Executive Officer',
    avatar: 'AL',
    children: [
      {
        id: 'cto',
        title: 'Grace Hopper',
        subtitle: 'Chief Technology Officer',
        avatar: 'GH',
        children: [
          { id: 'frontend', title: 'Margaret Hamilton', subtitle: 'Frontend Lead' },
          { id: 'backend', title: 'Ken Thompson', subtitle: 'Backend Lead' }
        ]
      },
      {
        id: 'cfo',
        title: 'Katherine Johnson',
        subtitle: 'Chief Financial Officer',
        avatar: 'KJ'
      }
    ]
  }
];

export function ContentKitDemo() {
  const [zoom, setZoom] = useState(1);
  const form = useForm({
    initialValues: { email: '', password: '' },
    rules: {
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address'
      },
      password: { required: true, minLength: 8 }
    },
    onSubmit: () => undefined
  });

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Markdown</Card.Header>
          <Card.Body>
            <Markdown value={markdown} ariaLabel="Release notes" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Mentions</Card.Header>
          <Card.Body>
            <Mentions
              data={people}
              label="Comment"
              ariaLabel="Comment"
              placeholder="Type @ to mention someone"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>SignaturePad</Card.Header>
          <Card.Body>
            <SignaturePad
              ariaLabel="Signature"
              penColor="#274bdb"
              backgroundColor="#f7f9fc"
              height={180}
              clearable
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ImageCropper</Card.Header>
          <Card.Body>
            <ImageCropper
              src={sampleImage}
              alt="Nebular gradient placeholder"
              ariaLabel="Nebular cropper"
              defaultValue={{ x: 20, y: 20, width: 60, height: 60 }}
              height={220}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>AvatarEditor</Card.Header>
          <Card.Body>
            <AvatarEditor
              src={sampleImage}
              alt="Nebular avatar"
              ariaLabel="Avatar editor"
              size={180}
              zoom={zoom}
              onZoomChange={setZoom}
            />
            <p>Zoom: {Math.round(zoom * 100)}%</p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>FileManager</Card.Header>
          <Card.Body>
            <FileManager
              items={fileItems}
              searchable
              ariaLabel="Project files"
              emptyState="No files"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>OrgChart</Card.Header>
          <Card.Body>
            <OrgChart
              nodes={orgNodes}
              defaultExpandedIds={['ceo', 'cto']}
              ariaLabel="Company structure"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Form</Card.Header>
          <Card.Body>
            <Form form={form} ariaLabel="Sign in">
              <FormControl label="Email" htmlFor="content-kit-email" error={form.errors.email}>
                <Input id="content-kit-email" {...form.getInputProps('email')} />
              </FormControl>
              <FormControl
                label="Password"
                htmlFor="content-kit-password"
                error={form.errors.password}
              >
                <Input
                  id="content-kit-password"
                  type="password"
                  {...form.getInputProps('password')}
                />
              </FormControl>
              <Button type="submit" fullWidth disabled={form.submitting}>
                {form.submitting ? 'Signing in' : 'Sign in'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Timepicker</Card.Header>
          <Card.Body>
            <Timepicker />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
