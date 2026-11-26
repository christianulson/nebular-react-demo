import {
  AvatarGroup,
  Breadcrumbs,
  Button,
  Card,
  Chip,
  ChipGroup,
  ColorSwatch,
  Descriptions,
  Divider,
  EmptyState,
  Icon,
  KpiCard,
  LoadingOverlay,
  PageHeader,
  Pagination,
  Popconfirm,
  Result,
  RingProgress,
  ScrollArea,
  Scheduler,
  SegmentedControl,
  Skeleton,
  Spoiler,
  Stat,
  Table,
  Tags,
  ThemeIcon,
  Timeline,
  Transfer,
  Tree,
  TreeTable,
  User
} from '@nebular-react/core';
import type { TreeNode } from '@nebular-react/core';
import React, { useState } from 'react';

const treeData = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'components', label: 'components' },
      { value: 'pages', label: 'pages' },
      { value: 'utils', label: 'utils' }
    ]
  },
  {
    value: 'public',
    label: 'public',
    children: [{ value: 'images', label: 'images' }]
  }
];

const remoteTreeData: TreeNode[] = [
  { value: 'remote', label: 'Remote catalog', hasChildren: true }
];

const loadRemoteTreeChildren = (node: TreeNode) =>
  Promise.resolve<TreeNode[]>(
    node.value === 'remote'
      ? [
          { value: 'remote-users', label: 'Users' },
          { value: 'remote-teams', label: 'Teams' },
          { value: 'remote-files', label: 'Files' }
        ]
      : []
  );

const transferData = [
  { value: 'read', label: 'Read' },
  { value: 'write', label: 'Write' },
  { value: 'delete', label: 'Delete' },
  { value: 'admin', label: 'Admin' }
];

const treeTableData = [
  {
    id: 'src',
    data: { name: 'src', type: 'folder' },
    children: [
      { id: 'src-components', data: { name: 'components', type: 'folder' } },
      { id: 'src-pages', data: { name: 'pages', type: 'folder' } },
      { id: 'src-index', data: { name: 'index.ts', type: 'file' } }
    ]
  },
  {
    id: 'package',
    data: { name: 'package.json', type: 'file' }
  }
];

const schedulerEvents = [
  {
    id: 1,
    title: 'Daily sync',
    start: new Date(2026, 10, 18, 9, 0),
    end: new Date(2026, 10, 18, 9, 30),
    color: '#3366ff'
  },
  {
    id: 2,
    title: 'Release review',
    start: new Date(2026, 10, 19, 14, 0),
    end: new Date(2026, 10, 19, 15, 0),
    color: '#00b887'
  }
];

export function DisplayDemo() {
  const [transferValue, setTransferValue] = useState<string[]>(['read']);
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Nebular']);
  const [chipValue, setChipValue] = useState<string[]>(['react']);
  const [swatch, setSwatch] = useState('#3366ff');
  const [treeChecked, setTreeChecked] = useState<string[]>(['components']);
  const [treeTableChecked, setTreeTableChecked] = useState<(string | number)[]>(['src-components']);
  const [treeTableStrict, setTreeTableStrict] = useState<'cascade' | 'strict'>('cascade');

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Breadcrumbs & Divider</Card.Header>
          <Card.Body>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Components', href: '#' },
                { label: 'Display' }
              ]}
            />
            <Divider label="Section" />
            <Stat
              label="Active users"
              value="12,430"
              hint="Last 30 days"
              trend={{ value: '+12%', direction: 'up' }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Timeline & Descriptions</Card.Header>
          <Card.Body>
            <Timeline
              items={[
                { title: 'Created', time: '09:00', active: true },
                { title: 'Reviewed', time: '10:30' },
                { title: 'Published', time: '11:15' }
              ]}
            />
            <Descriptions
              columns={2}
              items={[
                { label: 'Name', value: 'Alice' },
                { label: 'Role', value: 'Admin' },
                { label: 'Team', value: 'Platform' },
                { label: 'Status', value: 'Active' }
              ]}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Scroll area & Spoiler</Card.Header>
          <Card.Body>
            <ScrollArea maxHeight={120} tabIndex={0} aria-label="Scrollable example">
              <p>
                Scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </ScrollArea>
            <Spoiler maxHeight={60} showLabel="Read more" hideLabel="Show less">
              <p>
                This content is collapsible. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Spoiler>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Loading overlay</Card.Header>
          <Card.Body>
            <LoadingOverlay visible>
              <div style={{ minHeight: 100 }}>Content behind the overlay</div>
            </LoadingOverlay>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Tree</Card.Header>
          <Card.Body>
            <Tree
              data={treeData}
              checkable
              defaultExpandedValues={['src']}
              checkedValues={treeChecked}
              onCheckedChange={setTreeChecked}
              ariaLabel="Project files"
            />
            <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
              Checked: <strong>{treeChecked.length}</strong>
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Tree — async loadData</Card.Header>
          <Card.Body>
            <Tree
              data={remoteTreeData}
              loadData={loadRemoteTreeChildren}
              loadingLabel="Loading remote nodes"
              ariaLabel="Remote project files"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Transfer</Card.Header>
          <Card.Body>
            <Transfer
              data={transferData}
              value={transferValue}
              onChange={setTransferValue}
              searchable
              titles={['Available', 'Selected']}
              ariaLabel="Permissions"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Page header, pagination and skeleton</Card.Header>
          <Card.Body>
            <PageHeader
              title="Users"
              description="Manage access and permissions"
              actions={<Button>New user</Button>}
            />
            <Pagination total={10} defaultPage={3} />
            <Skeleton height={16} width="80%" visible />
            <Skeleton height={16} width="60%" visible />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Empty state, table and popconfirm</Card.Header>
          <Card.Body>
            <EmptyState
              title="No users"
              description="Invite someone to get started"
              action={<Button>Invite user</Button>}
            />
            <Table striped withBorder>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>Viewer</td>
                </tr>
              </tbody>
            </Table>
            <Popconfirm
              title="Delete user?"
              message="This action cannot be undone."
              onConfirm={() => undefined}
            >
              <Button status="danger">Delete</Button>
            </Popconfirm>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>TreeTable</Card.Header>
          <Card.Body>
            <div style={{ marginBottom: '0.75rem' }}>
              <SegmentedControl
                ariaLabel="TreeTable checkbox cascade"
                value={treeTableStrict}
                onChange={(value) => setTreeTableStrict(value as 'cascade' | 'strict')}
                data={[
                  { label: 'Cascade', value: 'cascade' },
                  { label: 'Strict', value: 'strict' }
                ]}
              />
            </div>
            <TreeTable
              data={treeTableData}
              columns={[
                { key: 'name', title: 'Name', sortable: true },
                { key: 'type', title: 'Type', sortable: true }
              ]}
              defaultExpandedIds={['src']}
              checkable
              checkStrictly={treeTableStrict === 'strict'}
              checkedIds={treeTableChecked}
              onCheckedChange={setTreeTableChecked}
              defaultSortBy="name"
              selectable
              caption="Project files"
            />
            <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
              Checked: <strong>{treeTableChecked.length}</strong>
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Chip & ChipGroup</Card.Header>
          <Card.Body>
            <ChipGroup
              label="Technologies"
              description="Select every technology you use"
              data={[
                'React',
                'TypeScript',
                'Nebular',
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
              multiple
              value={chipValue}
              onChange={(next) => setChipValue(next as string[])}
            />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
              <Chip defaultChecked>Default</Chip>
              <Chip variant="outline" status="success">
                Outline
              </Chip>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ColorSwatch & ThemeIcon</Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['#3366ff', '#00d68f', '#ffaa00', '#ff3d71', '#8f9bb3'].map((color) => (
                <ColorSwatch
                  key={color}
                  color={color}
                  checked={color === swatch}
                  ariaLabel={`Select ${color}`}
                  onClick={() => setSwatch(color)}
                />
              ))}
            </div>
            <p className="mt-2">Selected color: {swatch}</p>
            <div
              style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}
            >
              <ThemeIcon ariaLabel="Success">
                <Icon icon="checkmark" />
              </ThemeIcon>
              <ThemeIcon status="warning" variant="light" ariaLabel="Warning">
                <Icon icon="alert-circle-outline" />
              </ThemeIcon>
              <ThemeIcon status="danger" variant="outline" ariaLabel="Danger">
                <Icon icon="close" />
              </ThemeIcon>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>KpiCard</Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <KpiCard
                  label="Monthly revenue"
                  value="$ 128,400"
                  hint="Compared with last month"
                  trend={{ value: '+12.4%', direction: 'up' }}
                  status="success"
                />
              </div>
              <div className="col-md-6">
                <KpiCard
                  label="Open tickets"
                  value="37"
                  hint="8 waiting for a first response"
                  trend={{ value: '-4.1%', direction: 'down' }}
                  status="warning"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>RingProgress</Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
              <RingProgress value={72} label="72%" ariaLabel="Storage used" />
              <RingProgress
                value={45}
                status="success"
                roundCaps
                label={
                  <div>
                    <strong>45%</strong>
                    <div style={{ fontSize: '0.7em', fontWeight: 400 }}>completed</div>
                  </div>
                }
                ariaLabel="Tasks completed"
              />
              <RingProgress
                sections={[
                  { value: 40, color: 'var(--color-primary-500, #3366ff)' },
                  { value: 25, color: 'var(--color-success-500, #00d68f)' },
                  { value: 15, color: 'var(--color-warning-500, #ffaa00)' }
                ]}
                label="3/5"
                ariaLabel="Workspace usage by team"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>AvatarGroup</Card.Header>
          <Card.Body>
            <AvatarGroup max={3} total={6}>
              {['Alice', 'Bob', 'Carol', 'David', 'Eve', 'Frank'].map((name) => (
                <User key={name} name={name} size="large" showName={false} showTitle={false} />
              ))}
            </AvatarGroup>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>Tags</Card.Header>
          <Card.Body>
            <Tags
              tags={tags}
              withInput
              aria-label="Tags"
              onTagRemove={(tag) => setTags((current) => current.filter((item) => item !== tag))}
              onTagAdd={(tag) => setTags((current) => [...current, tag])}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Result</Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-4">
                <Result
                  status="success"
                  title="Payment completed"
                  subTitle="Your order is confirmed"
                />
              </div>
              <div className="col-md-4">
                <Result status="error" title="Payment failed" subTitle="The card was declined" />
              </div>
              <div className="col-md-4">
                <Result
                  status="warning"
                  title="Check your data"
                  subTitle="Some fields need attention"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Scheduler</Card.Header>
          <Card.Body>
            <Scheduler events={schedulerEvents} defaultView="month" ariaLabel="Team schedule" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
