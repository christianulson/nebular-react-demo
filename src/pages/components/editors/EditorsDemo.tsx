import {
  Card,
  CodeEditor,
  EmojiPicker,
  IconPicker,
  JsonEditor,
  MarkdownEditor,
  TemplateEditor
} from '@nebular-react/core';
import type { IconPickerValue } from '@nebular-react/core';
import React, { useState } from 'react';

const typescriptSample = `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`;

const jsonSample = `{
  "name": "Nebular",
  "version": "0.6.0",
  "components": 180,
  "stable": true,
  "tags": ["react", "typescript", "ui"]
}`;

const markdownSample = [
  '## Release notes',
  '',
  'This release adds a **Markdown editor** with a *live preview*.',
  '',
  '- Toolbar actions that preserve the selection',
  '- `Ctrl/Cmd + B`, `I` and `K` shortcuts',
  '',
  '> Everything is rendered with the existing safe `Markdown` component.',
  '',
  '```tsx',
  '<MarkdownEditor defaultValue={source} />',
  '```'
].join('\n');

const templateVariables = [
  { path: 'customer.name', label: 'Customer name', sample: 'Ana' },
  { path: 'order.number', label: 'Order number', sample: 1384 },
  { path: 'order.status', label: 'Delivery status', sample: 'Awaiting pickup' }
];

export function EditorsDemo() {
  const [markdown, setMarkdown] = useState(markdownSample);
  const [emoji, setEmoji] = useState<string | null>('🚀');
  const [icon, setIcon] = useState<IconPickerValue | null>(null);
  const [jsonStatus, setJsonStatus] = useState('valid');

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>CodeEditor</Card.Header>
          <Card.Body>
            <CodeEditor
              defaultValue={typescriptSample}
              language="typescript"
              height={280}
              lineNumbers
              ariaLabel="TypeScript code editor"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>JsonEditor</Card.Header>
          <Card.Body>
            <JsonEditor
              defaultValue={jsonSample}
              height={220}
              ariaLabel="JSON editor"
              onValidate={(result) =>
                setJsonStatus(result.valid ? 'valid' : (result.error?.message ?? 'invalid'))
              }
            />
            <p className="mt-2 mb-0">Validation: {jsonStatus}</p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>MarkdownEditor</Card.Header>
          <Card.Body>
            <MarkdownEditor
              value={markdown}
              onChange={setMarkdown}
              maxLength={2000}
              syncScroll
              placeholder="Write Markdown."
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>TemplateEditor</Card.Header>
          <Card.Body>
            <TemplateEditor
              defaultValue={'Hello, {{customer.name}}!\nOrder {{order.number}} is ready.'}
              variables={templateVariables}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>EmojiPicker</Card.Header>
          <Card.Body>
            <EmojiPicker
              label="Reaction"
              description="Search by name or browse the categories."
              clearable
              value={emoji}
              onChange={setEmoji}
            />
            <p className="mt-2 mb-0">Selected emoji: {emoji ?? 'none'}</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>IconPicker</Card.Header>
          <Card.Body>
            <IconPicker packs={['nebular-essentials']} value={icon} onChange={setIcon} clearable />
            <p className="mt-2 mb-0">
              Selected icon: {icon ? `${icon.pack}/${icon.name}` : 'none'}
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
