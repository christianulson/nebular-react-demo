import { Badge, Card, DataGrid, DataGridColumn, SegmentedControl } from '@nebular-react/core';
import React, { useMemo, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  salary: number;
}

const roles = ['Admin', 'Editor', 'Viewer'];
const firstNames = ['Alice', 'Bob', 'Carol', 'David', 'Eve', 'Frank', 'Grace', 'Heidi'];
const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Costa', 'Rocha'];

const data: User[] = Array.from({ length: 500 }, (_, index) => ({
  id: index + 1,
  name: `${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`,
  email: `user${index + 1}@example.com`,
  role: roles[index % roles.length],
  status: index % 4 === 0 ? 'inactive' : 'active',
  salary: 3000 + (index % 20) * 450
}));

type DemoDensity = 'compact' | 'comfortable' | 'spacious';

export function DataGridDemo() {
  const [density, setDensity] = useState<DemoDensity>('comfortable');
  const columns = useMemo<DataGridColumn<User>[]>(
    () => [
      { key: 'id', title: 'ID', sortable: true, width: 70 },
      { key: 'name', title: 'Name', sortable: true, filterable: true },
      { key: 'email', title: 'E-mail', filterable: true, minWidth: 220 },
      { key: 'role', title: 'Role', sortable: true, filterable: true },
      {
        key: 'status',
        title: 'Status',
        filterable: true,
        render: (user) => (
          <Badge text={user.status} status={user.status === 'active' ? 'success' : 'danger'} />
        )
      },
      {
        key: 'salary',
        title: 'Salary',
        align: 'right',
        sortable: true,
        render: (user) => `$${user.salary.toLocaleString('en-US')}`
      }
    ],
    []
  );

  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <Card.Header>DataGrid — sorting, filters, selection, resize and export</Card.Header>
          <Card.Body>
            <div style={{ marginBottom: '0.75rem' }}>
              <SegmentedControl
                ariaLabel="Row density"
                value={density}
                onChange={(value) => setDensity(value as DemoDensity)}
                data={[
                  { label: 'Compact', value: 'compact' },
                  { label: 'Comfortable', value: 'comfortable' },
                  { label: 'Spacious', value: 'spacious' }
                ]}
              />
            </div>
            <DataGrid
              data={data.slice(0, 80)}
              columns={columns}
              getRowId={(user) => user.id}
              pageSize={8}
              density={density}
              withColumnFilters
              withSelection
              withColumnResize
              withColumnVisibility
              withColumnReorder
              withExport
              exportFileName="users.csv"
              caption="Users"
              ariaLabel="Users data grid"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>DataGrid — virtualized (500 rows)</Card.Header>
          <Card.Body>
            <DataGrid
              data={data}
              columns={columns}
              getRowId={(user) => user.id}
              pageSize={500}
              withPagination={false}
              virtualized
              virtualizedMaxHeight={360}
              ariaLabel="Virtualized users data grid"
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
