import {
  Autocomplete,
  Card,
  Cascader,
  Combobox,
  MultiSelect,
  NativeSelect,
  SegmentedControl,
  Select,
  TreeSelect
} from '@nebular-react/core';
import type { CascaderOption, MultiSelectData, TreeSelectNode } from '@nebular-react/core';
import React, { useEffect, useMemo, useState } from 'react';

const groupedOptions = [
  {
    type: 'group' as const,
    label: 'Frontend',
    options: [
      { type: 'option' as const, label: 'React', value: 'react' },
      { type: 'option' as const, label: 'Vue', value: 'vue' },
      { type: 'option' as const, label: 'Angular', value: 'angular' }
    ]
  },
  {
    type: 'group' as const,
    label: 'Backend',
    options: [
      { type: 'option' as const, label: 'Node.js', value: 'node' },
      { type: 'option' as const, label: '.NET', value: 'dotnet' },
      { type: 'option' as const, label: 'Go', value: 'go' }
    ]
  }
];

const remoteAsyncCatalog: MultiSelectData[] = Array.from({ length: 24 }, (_, index) => ({
  label: `Member ${index + 1}`,
  value: `member-${index + 1}`
}));

const stackGroups: MultiSelectData[] = [
  {
    type: 'group',
    label: 'Frontend',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' }
    ]
  },
  {
    type: 'group',
    label: 'Backend',
    options: [
      { label: 'Node.js', value: 'node' },
      { label: '.NET', value: 'dotnet' },
      { label: 'Go', value: 'go' }
    ]
  }
];

const treeSelectData: TreeSelectNode[] = [
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

const remoteTreeNodes: TreeSelectNode[] = [
  { value: 'remote', label: 'Remote catalog', hasChildren: true }
];

const loadRemoteTreeChildren = (node: TreeSelectNode) =>
  Promise.resolve<TreeSelectNode[]>(
    node.value === 'remote'
      ? [
          { value: 'remote-users', label: 'Users' },
          { value: 'remote-teams', label: 'Teams' },
          { value: 'remote-files', label: 'Files' }
        ]
      : []
  );

const remoteCascaderOptions: CascaderOption[] = [
  { value: 'remote', label: 'Remote regions', hasChildren: true }
];

const loadRemoteCascaderChildren = (option: CascaderOption) =>
  Promise.resolve<CascaderOption[]>(
    option.value === 'remote'
      ? [
          { value: 'south', label: 'South' },
          { value: 'north', label: 'North' },
          { value: 'east', label: 'East' }
        ]
      : []
  );

const optionDescriptions: Record<string, string> = {
  react: 'Component library',
  vue: 'Progressive framework',
  angular: 'Application platform',
  node: 'JavaScript runtime',
  dotnet: '.NET platform',
  go: 'Compiled language'
};

export function SelectDemo() {
  const [country, setCountry] = useState<string | null>('br');
  const [fruits, setFruits] = useState<string[]>(['apple']);
  const [fruit, setFruit] = useState('Banana');
  const [treeChecked, setTreeChecked] = useState<string[]>(['src-components']);
  const [treeMode, setTreeMode] = useState<'cascade' | 'strict'>('cascade');
  const [asyncQuery, setAsyncQuery] = useState('');
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<MultiSelectData[]>(
    remoteAsyncCatalog.slice(0, 6)
  );
  const virtualizedOptions = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, index) => ({
        type: 'option' as const,
        label: `Option ${index + 1}`,
        value: `option-${index + 1}`
      })),
    []
  );

  const autocompleteData = useMemo(
    () => Array.from({ length: 200 }, (_, index) => `Suggestion ${index + 1}`),
    []
  );

  useEffect(() => {
    const query = asyncQuery.trim().toLowerCase();

    if (!query) {
      setAsyncOptions(remoteAsyncCatalog.slice(0, 6));
      setAsyncLoading(false);
      return undefined;
    }

    setAsyncLoading(true);
    const timer = window.setTimeout(() => {
      setAsyncOptions(
        remoteAsyncCatalog.filter((option) => {
          if (typeof option === 'string') {
            return option.toLowerCase().includes(query);
          }
          if ('type' in option && option.type === 'group') {
            return false;
          }
          return 'label' in option && option.label.toLowerCase().includes(query);
        })
      );
      setAsyncLoading(false);
    }, 250);

    return () => window.clearTimeout(timer);
  }, [asyncQuery]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Searchable + clearable</Card.Header>
          <Card.Body>
            <Select
              options={['Light', 'Cosmic', 'Corporate', 'Dark']}
              placeholder="Choose a theme"
              searchable
              clearable
              allowDeselect
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Loading</Card.Header>
          <Card.Body>
            <Select
              options={[]}
              placeholder="Loading options..."
              loading
              nothingFoundMessage="Nothing found"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Multiple + search</Card.Header>
          <Card.Body>
            <Select
              options={groupedOptions}
              multiple
              searchable
              clearable
              placeholder="Choose technologies"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Virtualized (1.000 options)</Card.Header>
          <Card.Body>
            <Select
              options={virtualizedOptions}
              searchable
              virtualized
              virtualizedMaxHeight={280}
              placeholder="Search among 1.000 options"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Autocomplete</Card.Header>
          <Card.Body>
            <Autocomplete
              data={autocompleteData}
              placeholder="Start typing..."
              activeFirst
              dropdownWidth={280}
              renderOption={(option) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    width: '100%'
                  }}
                >
                  <span>{option.label}</span>
                  <small style={{ color: 'var(--text-hint-color)' }}>suggestion</small>
                </div>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Combobox</Card.Header>
          <Card.Body>
            <Combobox
              aria-label="Shipping country"
              value={country}
              onChange={setCountry}
              options={[
                { value: 'br', label: 'Brazil' },
                { value: 'ca', label: 'Canada' },
                { value: 'de', label: 'Germany' }
              ]}
              fullWidth
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>NativeSelect</Card.Header>
          <Card.Body>
            <NativeSelect
              label="Favorite fruit"
              description="Rendered with the browser native select element."
              placeholder="Pick one"
              data={['Apple', 'Banana', 'Orange']}
              value={fruit}
              onChange={setFruit}
              required
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>MultiSelect</Card.Header>
          <Card.Body>
            <MultiSelect
              data={[
                { label: 'Apple', value: 'apple' },
                { label: 'Banana', value: 'banana' },
                { label: 'Cherry', value: 'cherry' },
                { label: 'Grape', value: 'grape' },
                { label: 'Mango', value: 'mango', disabled: true }
              ]}
              label="Fruits"
              description="Pick as many fruits as you like"
              placeholder="Select fruits"
              searchable
              clearable
              maxValues={3}
              value={fruits}
              onChange={setFruits}
            />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Select — renderOption</Card.Header>
          <Card.Body>
            <Select
              options={groupedOptions}
              searchable
              placeholder="Choose a technology"
              renderOption={(option) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    width: '100%'
                  }}
                >
                  <span>{option.label}</span>
                  <small style={{ color: 'var(--text-hint-color)' }}>
                    {optionDescriptions[option.value]}
                  </small>
                </div>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>MultiSelect — groups, virtualized and renderOption</Card.Header>
          <Card.Body>
            <MultiSelect
              data={stackGroups}
              label="Stack"
              description="Grouped options with rich labels"
              searchable
              virtualized
              virtualizedMaxHeight={220}
              renderOption={(option) => (
                <span>
                  {option.label}{' '}
                  <small style={{ color: 'var(--text-hint-color)' }}>
                    {optionDescriptions[option.value]}
                  </small>
                </span>
              )}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>MultiSelect — async search</Card.Header>
          <Card.Body>
            <MultiSelect
              data={asyncOptions}
              label="Remote members"
              placeholder="Type to search"
              searchable
              loading={asyncLoading}
              onSearchChange={setAsyncQuery}
              nothingFoundMessage="No members found"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>TreeSelect — checkable cascade</Card.Header>
          <Card.Body>
            <SegmentedControl
              ariaLabel="Checkbox cascade"
              fullWidth
              value={treeMode}
              onChange={(value) => setTreeMode(value as 'cascade' | 'strict')}
              data={[
                { label: 'Cascade', value: 'cascade' },
                { label: 'Strict', value: 'strict' }
              ]}
            />
            <div style={{ marginTop: '0.75rem' }}>
              <TreeSelect
                data={treeSelectData}
                label="Project access"
                description="Checking a parent selects every child"
                checkable
                checkStrictly={treeMode === 'strict'}
                searchable
                defaultExpandedValues={['src']}
                checkedValues={treeChecked}
                onCheckedChange={setTreeChecked}
              />
            </div>
            <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
              Checked: <strong>{treeChecked.length}</strong>
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>TreeSelect — async loadData</Card.Header>
          <Card.Body>
            <TreeSelect
              data={remoteTreeNodes}
              label="Remote catalog"
              placeholder="Expand to load children"
              searchable
              loadData={loadRemoteTreeChildren}
              loadingLabel="Loading remote nodes"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Cascader — searchable + async loadData</Card.Header>
          <Card.Body>
            <Cascader
              options={remoteCascaderOptions}
              label="Remote location"
              placeholder="Search by path"
              searchable
              clearable
              changeOnSelect
              loadData={loadRemoteCascaderChildren}
              loadingLabel="Loading regions"
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
