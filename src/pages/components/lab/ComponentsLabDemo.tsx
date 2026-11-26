import {
  Anchor,
  Button,
  Card,
  Cascader,
  DashboardGrid,
  FilterBuilder,
  Image,
  Kanban,
  MindMap,
  NotificationCenter,
  QRCode,
  Tour,
  TreeSelect,
  WorkflowDesigner
} from '@nebular-react/core';
import type {
  FilterBuilderField,
  FilterBuilderRule,
  KanbanColumn,
  MindMapNode,
  TourStep,
  WorkflowEdge,
  WorkflowNode
} from '@nebular-react/core';
import React, { useState } from 'react';

const sampleImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#274bdb"/>
        <stop offset="1" stop-color="#00b887"/>
      </linearGradient>
    </defs>
    <rect width="480" height="240" fill="url(#g)"/>
    <text x="24" y="132" fill="#fff" font-family="sans-serif" font-size="26">Nebular Image</text>
  </svg>`
)}`;

const cascaderOptions = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' }
    ]
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      { value: 'node', label: 'Node.js' },
      { value: 'dotnet', label: '.NET' },
      { value: 'go', label: 'Go' }
    ]
  }
];

const treeSelectData = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src-components', label: 'components' },
      { value: 'src-pages', label: 'pages' },
      { value: 'src-utils', label: 'utils' }
    ]
  },
  {
    value: 'public',
    label: 'public',
    children: [{ value: 'public-images', label: 'images' }]
  }
];

const mindMapRoot: MindMapNode = {
  id: 'product',
  label: 'Product',
  color: '#3366ff',
  children: [
    {
      id: 'design',
      label: 'Design',
      color: '#00b8d9',
      children: [
        { id: 'research', label: 'UX Research' },
        { id: 'ui', label: 'UI Design', children: [{ id: 'system', label: 'Design System' }] }
      ]
    },
    {
      id: 'engineering',
      label: 'Engineering',
      color: '#36b37e',
      children: [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'infra', label: 'Infrastructure' }
      ]
    }
  ]
};

const workflowNodes: WorkflowNode[] = [
  { id: 'draft', label: 'Draft', x: 0, y: 0, color: '#3366ff' },
  { id: 'review', label: 'Review', x: 220, y: 0 },
  { id: 'approve', label: 'Approve', x: 440, y: 0, color: '#00d68f' },
  { id: 'publish', label: 'Publish', x: 660, y: 0 }
];

const workflowEdges: WorkflowEdge[] = [
  { id: 'draft-review', from: 'draft', to: 'review', label: 'submit' },
  { id: 'review-approve', from: 'review', to: 'approve' },
  { id: 'approve-publish', from: 'approve', to: 'publish', label: 'go live' }
];

const filterFields: FilterBuilderField[] = [
  { key: 'name', label: 'Name', type: 'text' },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' }
    ]
  },
  { key: 'revenue', label: 'Revenue', type: 'number' }
];

const defaultRules: FilterBuilderRule[] = [
  { id: 'rule-1', field: 'name', operator: 'contains', value: 'nebular' }
];

const initialKanban: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To do',
    limit: 4,
    cards: [
      { id: 'card-1', title: 'Design tokens', tags: ['design'] },
      { id: 'card-2', title: 'Write docs', tags: ['docs'] }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    limit: 3,
    cards: [{ id: 'card-3', title: 'Virtualized Select', tags: ['core'] }]
  },
  {
    id: 'done',
    title: 'Done',
    cards: [{ id: 'card-4', title: 'Mantine 9 migration', tags: ['core'] }]
  }
];

const tourSteps: TourStep[] = [
  {
    target: '#lab-navigation',
    title: 'Navigation',
    content: 'Anchor, Cascader and TreeSelect help users move through hierarchies.'
  },
  {
    target: '#lab-workspace',
    title: 'Workspace',
    content: 'DashboardGrid, FilterBuilder, Kanban and NotificationCenter cover data-heavy UIs.'
  },
  {
    target: '#lab-media',
    title: 'Media',
    content: 'Image and QRCode are rendered without external dependencies.'
  }
];

export function ComponentsLabDemo() {
  const [tourOpen, setTourOpen] = useState(false);
  const [appliedRules, setAppliedRules] = useState<FilterBuilderRule[]>(defaultRules);
  const [kanbanColumns, setKanbanColumns] = useState<KanbanColumn[]>(initialKanban);

  const moveCard = (cardId: string, fromId: string, toId: string, toIndex: number) => {
    setKanbanColumns((columns) => {
      const fromColumn = columns.find((column) => column.id === fromId);
      const card = fromColumn?.cards.find((item) => item.id === cardId);
      if (!card) {
        return columns;
      }

      if (fromId === toId) {
        return columns.map((column) => {
          if (column.id !== fromId) {
            return column;
          }
          const cards = column.cards.filter((item) => item.id !== cardId);
          cards.splice(toIndex, 0, card);
          return { ...column, cards };
        });
      }

      return columns.map((column) => {
        if (column.id === fromId) {
          return { ...column, cards: column.cards.filter((item) => item.id !== cardId) };
        }
        if (column.id === toId) {
          const cards = [...column.cards];
          cards.splice(toIndex, 0, card);
          return { ...column, cards };
        }
        return column;
      });
    });
  };

  return (
    <div className="row">
      <div className="col-md-12 col-lg-4 col-xxxl-3">
        <Card id="lab-navigation">
          <Card.Header>Anchor</Card.Header>
          <Card.Body>
            <Anchor
              items={tourSteps.map((step, index) => ({
                key: step.title as string,
                label: step.title,
                href: step.target as string,
                depth: index === 0 ? 0 : 1
              }))}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-3">
        <Card>
          <Card.Header>Cascader</Card.Header>
          <Card.Body>
            <Cascader
              options={cascaderOptions}
              defaultValue={['frontend', 'react']}
              changeOnSelect
              clearable
              label="Technology"
              placeholder="Pick a stack"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-3">
        <Card>
          <Card.Header>TreeSelect</Card.Header>
          <Card.Body>
            <TreeSelect
              data={treeSelectData}
              defaultValue="src-components"
              defaultExpandedValues={['src']}
              searchable
              clearable
              label="Project path"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-4 col-xxxl-3">
        <Card>
          <Card.Header>Tour</Card.Header>
          <Card.Body>
            <p>Start a guided tour over the sections of this page.</p>
            <Button onClick={() => setTourOpen(true)}>Start tour</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12" id="lab-workspace">
        <Card>
          <Card.Header>DashboardGrid</Card.Header>
          <Card.Body>
            <DashboardGrid
              widgets={[
                {
                  id: 'revenue',
                  title: 'Revenue',
                  columnSpan: 4,
                  rowSpan: 1,
                  content: <strong style={{ fontSize: '1.5rem' }}>$48,120</strong>
                },
                {
                  id: 'users',
                  title: 'Active users',
                  columnSpan: 4,
                  rowSpan: 1,
                  content: <strong style={{ fontSize: '1.5rem' }}>12,430</strong>
                },
                {
                  id: 'tickets',
                  title: 'Open tickets',
                  columnSpan: 4,
                  rowSpan: 1,
                  content: <strong style={{ fontSize: '1.5rem' }}>37</strong>
                }
              ]}
              ariaLabel="Key metrics"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>FilterBuilder</Card.Header>
          <Card.Body>
            <FilterBuilder
              fields={filterFields}
              defaultValue={defaultRules}
              onApply={setAppliedRules}
              onReset={() => setAppliedRules([])}
            />
            <p style={{ marginTop: '0.75rem' }}>
              Applied rules: <strong>{appliedRules.length}</strong>
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>NotificationCenter</Card.Header>
          <Card.Body>
            <NotificationCenter
              notifications={[
                {
                  id: 'notification-1',
                  title: 'Deploy finished',
                  message: 'Version 0.5.0 is live',
                  status: 'success',
                  timestamp: '2026-11-18T20:00:00Z',
                  read: false
                },
                {
                  id: 'notification-2',
                  title: 'New comment',
                  message: 'A reviewer replied to your PR',
                  status: 'info',
                  timestamp: '2026-11-18T19:00:00Z',
                  read: false
                },
                {
                  id: 'notification-3',
                  title: 'Storage warning',
                  message: 'Bucket usage is above 80%',
                  status: 'warning',
                  timestamp: '2026-11-18T18:00:00Z',
                  read: true
                }
              ]}
              onMarkAllRead={() => undefined}
              onClear={() => undefined}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Kanban</Card.Header>
          <Card.Body>
            <Kanban columns={kanbanColumns} onCardMove={moveCard} ariaLabel="Release board" />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6" id="lab-media">
        <Card>
          <Card.Header>Image</Card.Header>
          <Card.Body>
            <Image
              src={sampleImage}
              alt="Nebular gradient placeholder"
              width={320}
              height={180}
              radius={12}
              fit="cover"
              caption="Local data-URI image"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>QRCode</Card.Header>
          <Card.Body>
            <QRCode
              value="https://github.com/hirol888/nebular-react"
              size={160}
              ariaLabel="Nebular React repository QR code"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>WorkflowDesigner</Card.Header>
          <Card.Body>
            <div style={{ height: 420 }}>
              <WorkflowDesigner
                nodes={workflowNodes}
                edges={workflowEdges}
                defaultSelectedNodeId="review"
                ariaLabel="Publishing workflow"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>MindMap</Card.Header>
          <Card.Body>
            <MindMap
              root={mindMapRoot}
              collapsible
              defaultExpandedIds={['product', 'design', 'engineering']}
              ariaLabel="Product mind map"
            />
          </Card.Body>
        </Card>
      </div>

      <Tour
        steps={tourSteps}
        opened={tourOpen}
        onOpenChange={setTourOpen}
        onFinish={() => setTourOpen(false)}
        onClose={() => setTourOpen(false)}
      />
    </div>
  );
}
