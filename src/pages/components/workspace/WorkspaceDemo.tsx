import {
  AuditTrail,
  BulkActionBar,
  Button,
  Card,
  DockLayout,
  InlineEdit,
  Input,
  NativeSelect,
  OnboardingChecklist,
  OverflowList,
  PermissionMatrix,
  RecordPicker,
  ResponsiveFilterBar,
  TableOfContents,
  Toolbar,
  VersionHistory
} from '@nebular-react/core';
import type {
  AuditTrailGroup,
  DockLayoutNode,
  DockLayoutPanel,
  OnboardingChecklistTask,
  PermissionMatrixChange,
  PermissionMatrixValue,
  VersionHistoryRevision
} from '@nebular-react/core';
import React, { useState } from 'react';

const initialLayout: DockLayoutNode = {
  id: 'root',
  type: 'split',
  orientation: 'horizontal',
  size: 60,
  first: {
    id: 'editor',
    type: 'group',
    label: 'Editor',
    panelIds: ['draft', 'tasks']
  },
  second: {
    id: 'inspector',
    type: 'group',
    label: 'Inspector',
    panelIds: ['details']
  }
};

const dockPanels: DockLayoutPanel[] = [
  {
    id: 'draft',
    title: 'Draft',
    content: (
      <div style={{ padding: '0.75rem' }}>
        <p style={{ margin: 0 }}>Write the release notes here.</p>
      </div>
    )
  },
  {
    id: 'tasks',
    title: 'Tasks',
    content: (
      <ul style={{ margin: '0.75rem 0 0 1.25rem' }}>
        <li>Review the draft</li>
        <li>Publish an update</li>
      </ul>
    )
  },
  {
    id: 'details',
    title: 'Details',
    content: (
      <div style={{ padding: '0.75rem' }}>
        <p style={{ margin: 0 }}>Owner: Platform team</p>
      </div>
    )
  }
];

const auditGroups: AuditTrailGroup[] = [
  {
    id: '2026-11-24',
    label: 'November 24, 2026',
    entries: [
      {
        id: 'approved',
        title: 'Invoice approved',
        actor: 'Ana Costa',
        dateTime: '2026-11-24T14:40:00-03:00',
        timeLabel: '14:40 BRT',
        description: 'Reconciliation finished.',
        changes: [
          { id: 'status', label: 'Status', before: 'Pending', after: 'Approved' },
          { id: 'account', label: 'Account', before: 'Operations', after: 'Finance' }
        ]
      },
      {
        id: 'reviewed',
        title: 'Invoice reviewed',
        actor: 'Joao Lima',
        dateTime: '2026-11-24T13:31:00-03:00',
        timeLabel: '13:31 BRT'
      }
    ]
  }
];

const revisions: VersionHistoryRevision[] = [
  {
    id: '3',
    label: 'Published draft',
    author: 'Avery',
    createdAt: '2026-11-20T14:00:00Z',
    content: 'Opening hours\nMonday-Saturday: 9 am to 6 pm\nSunday: 10 am to 4 pm'
  },
  {
    id: '2',
    label: 'Reviewed draft',
    author: 'Sam',
    createdAt: '2026-11-18T14:00:00Z',
    content: 'Opening hours\nMonday-Saturday: 9 am to 6 pm'
  },
  {
    id: '1',
    label: 'First draft',
    author: 'Sam',
    createdAt: '2026-11-17T14:00:00Z',
    content: 'Opening hours\nMonday-Friday: 9 am to 5 pm'
  }
];

const permissionResources = [
  { id: 'orders', label: 'Orders' },
  { id: 'invoices', label: 'Invoices' },
  { id: 'reports', label: 'Reports', disabled: true }
];

const permissionActions = [
  { id: 'view', label: 'View' },
  { id: 'edit', label: 'Edit' },
  { id: 'approve', label: 'Approve' }
];

const initialPermissions: PermissionMatrixValue = {
  orders: {
    view: { source: 'inherited', allowed: true },
    edit: { source: 'explicit', allowed: true }
  },
  invoices: {
    view: { source: 'explicit', allowed: true },
    edit: { source: 'explicit', allowed: false }
  }
};

const onboardingTasks: OnboardingChecklistTask[] = [
  {
    id: 'profile',
    title: 'Create your profile',
    description: 'Your colleagues use your profile to identify you.',
    status: 'completed'
  },
  {
    id: 'workspace',
    title: 'Review workspace settings',
    description: 'Check the workspace name and time zone.',
    action: { type: 'link', label: 'Open settings', href: '#workspace-settings' }
  },
  {
    id: 'team',
    title: 'Invite your team',
    description: 'Add the people who will collaborate with you.',
    action: { type: 'link', label: 'Invite people', href: '#invite-people' }
  }
];

const pickerRecords = Array.from({ length: 23 }, (_item, index) => ({
  id: index + 1,
  name: `Workspace ${index + 1}`,
  location: index % 2 ? 'North' : 'South',
  archived: index === 3
}));

function searchRecords({
  query,
  page,
  pageSize
}: {
  query: string;
  page: number;
  pageSize: number;
}) {
  const matching = pickerRecords.filter(({ name, location }) =>
    `${name} ${location}`.toLowerCase().includes(query.toLowerCase())
  );
  const start = (page - 1) * pageSize;

  return {
    records: matching.slice(start, start + pageSize),
    total: matching.length
  };
}

export function WorkspaceDemo() {
  const [layout, setLayout] = useState(initialLayout);
  const [bold, setBold] = useState(false);
  const [title, setTitle] = useState('Guide to community events');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [bulkScope, setBulkScope] = useState<'explicit' | 'allMatching'>('explicit');
  const [bulkMessage, setBulkMessage] = useState('');
  const [permissions, setPermissions] = useState(initialPermissions);
  const [currentRevision, setCurrentRevision] = useState('3');
  const [pickedRecords, setPickedRecords] = useState<readonly (typeof pickerRecords)[number][]>([
    pickerRecords[0]
  ]);
  const [tasks, setTasks] = useState(onboardingTasks);
  const [filters, setFilters] = useState([
    { id: 'status', label: 'Status: Open' },
    { id: 'team', label: 'Team: Finance' }
  ]);
  const [selectedView, setSelectedView] = useState('');

  const allMatching = bulkScope === 'allMatching';
  const selectedCount = allMatching ? 24 : selectedCompanies.length;

  const applyPermission = ({ resourceId, actionId, allowed }: PermissionMatrixChange) => {
    setPermissions((current) => ({
      ...current,
      [resourceId]: {
        ...current[resourceId],
        [actionId]: { source: 'explicit', allowed }
      }
    }));
  };

  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <Card.Header>DockLayout</Card.Header>
          <Card.Body>
            <div style={{ height: 360 }}>
              <DockLayout layout={layout} panels={dockPanels} onLayoutChange={setLayout} />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Toolbar</Card.Header>
          <Card.Body>
            <Toolbar aria-label="Formatting">
              <Toolbar.Item>
                <Button
                  size="small"
                  aria-pressed={bold}
                  status={bold ? 'primary' : 'basic'}
                  onClick={() => setBold((current) => !current)}
                >
                  Bold
                </Button>
              </Toolbar.Item>
              <Toolbar.Item>
                <Button size="small" onClick={() => setBold(false)}>
                  Clear
                </Button>
              </Toolbar.Item>
              <Toolbar.Separator />
              <Toolbar.Item>
                <Button size="small" appearance="outline">
                  Preview
                </Button>
              </Toolbar.Item>
            </Toolbar>
            <p style={{ fontWeight: bold ? 'bold' : undefined, marginTop: '0.75rem' }}>
              Format this paragraph with the toolbar.
            </p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>InlineEdit</Card.Header>
          <Card.Body>
            <InlineEdit
              label="Document title"
              value={title}
              onChange={setTitle}
              validate={(value) => (value.trim() ? null : 'Enter a title.')}
              autoSelect
            />
            <p className="mt-2 mb-0">Current title: {title}</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>OverflowList</Card.Header>
          <Card.Body>
            <div style={{ maxWidth: 280 }}>
              <OverflowList
                items={['Rename', 'Move', 'Share', 'Duplicate', 'Archive']}
                getItemKey={(item) => item}
                renderItem={(item) => (
                  <Button size="small" appearance="outline">
                    {item}
                  </Button>
                )}
              />
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>OnboardingChecklist</Card.Header>
          <Card.Body>
            <OnboardingChecklist
              tasks={tasks}
              onTaskStatusChange={(id, status) =>
                setTasks((current) =>
                  current.map((task) => (task.id === id ? { ...task, status } : task))
                )
              }
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>TableOfContents</Card.Header>
          <Card.Body>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'minmax(7rem, 1fr) 2fr', gap: '1rem' }}
            >
              <TableOfContents
                items={[
                  { id: 'toc-overview', label: 'Overview' },
                  { id: 'toc-connect', label: 'Connect your account', depth: 1 },
                  { id: 'toc-review', label: 'Review your settings', depth: 1 }
                ]}
              />
              <div
                role="region"
                aria-label="Store policy"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- This standalone scroll region needs to be reachable by keyboard.
                tabIndex={0}
                style={{ maxHeight: 220, overflow: 'auto' }}
              >
                <section style={{ minHeight: 140 }}>
                  <h3 id="toc-overview">Overview</h3>
                  <p>Use the table of contents to jump to a section.</p>
                </section>
                <section style={{ minHeight: 140 }}>
                  <h3 id="toc-connect">Connect your account</h3>
                  <p>Link the services used by this workspace.</p>
                </section>
                <section style={{ minHeight: 140 }}>
                  <h3 id="toc-review">Review your settings</h3>
                  <p>Confirm the options before publishing.</p>
                </section>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>BulkActionBar</Card.Header>
          <Card.Body>
            <BulkActionBar
              selection={{ count: selectedCount, scope: bulkScope }}
              page={{ count: 3, selectedCount: allMatching ? 3 : selectedCount }}
              matchingCount={24}
              actions={[{ id: 'export', label: 'Export companies', status: 'primary' }]}
              onSelectPage={() => setSelectedCompanies(['Solstice', 'Oak', 'Windmill'])}
              onSelectAllMatching={() => setBulkScope('allMatching')}
              onClearSelection={() => {
                setBulkScope('explicit');
                setSelectedCompanies([]);
              }}
              onAction={() => setBulkMessage(`${selectedCount} companies selected for export.`)}
            />
            {bulkMessage && <p role="status">{bulkMessage}</p>}
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>ResponsiveFilterBar</Card.Header>
          <Card.Body>
            <ResponsiveFilterBar
              layout="inline"
              editor={
                <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '1fr 1fr' }}>
                  <NativeSelect label="Status" data={['Open', 'Completed']} />
                  <Input aria-label="Team" placeholder="Finance" />
                </div>
              }
              filters={filters}
              onRemoveFilter={(id) =>
                setFilters((current) => current.filter((item) => item.id !== id))
              }
              onClearFilters={() => setFilters([])}
              savedViews={[
                { id: 'open', label: 'Open requests' },
                { id: 'finance', label: 'Finance team' }
              ]}
              selectedViewId={selectedView}
              onSelectView={setSelectedView}
            />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>PermissionMatrix</Card.Header>
          <Card.Body>
            <PermissionMatrix
              resources={permissionResources}
              actions={permissionActions}
              value={permissions}
              onChange={applyPermission}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>AuditTrail</Card.Header>
          <Card.Body>
            <AuditTrail groups={auditGroups} />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>VersionHistory</Card.Header>
          <Card.Body>
            <VersionHistory
              revisions={revisions}
              currentId={currentRevision}
              onRestore={(revision) => setCurrentRevision(revision.id)}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>RecordPicker</Card.Header>
          <Card.Body>
            <RecordPicker
              multiple
              value={pickedRecords}
              onChange={setPickedRecords}
              pageSize={5}
              searchRecords={searchRecords}
              getRecordId={(record) => record.id}
              getRecordLabel={(record) => record.name}
              isRecordDisabled={(record) => record.archived}
              columns={[
                { key: 'name', title: 'Workspace' },
                { key: 'location', title: 'Location' }
              ]}
            />
            <p className="mt-2 mb-0">Selected: {pickedRecords.length} record(s)</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
