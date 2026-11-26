import { Button, Card, Icon, Input, Select } from '@nebular-react/core';
import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  createPaginatedRowModel,
  createSortedRowModel,
  flexRender,
  rowPaginationFeature,
  rowSortingFeature,
  sortFns,
  SortingState,
  tableFeatures,
  useTable
} from '@tanstack/react-table';
import personData from './data.json';
import useStyles from './ReactTable.styles';

type Person = (typeof personData)[number];

const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns
});

export function ReactTableDemo() {
  const columns = useMemo<ColumnDef<typeof features, Person>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'First Name', accessorKey: 'firstName' },
      { header: 'Last Name', accessorKey: 'lastName' },
      { header: 'Username', accessorKey: 'username' },
      { header: 'E-mail', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age' }
    ],
    []
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const { classes, cx } = useStyles();

  const table = useTable({
    features,
    data: personData,
    columns,
    state: { sorting },
    onSortingChange: setSorting
  });

  const { pageIndex, pageSize } = table.state.pagination;

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>TanStack Table</Card.Header>
      <Card.Body>
        <div className="react-table-container">
          <table>
            <thead>
              <tr className="titles">
                {table.getHeaderGroups()[0]?.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className="sort-icon">
                      {header.column.getIsSorted() === 'desc' ? (
                        <Icon icon="chevron-down-outline" />
                      ) : null}
                      {header.column.getIsSorted() === 'asc' ? (
                        <Icon icon="chevron-up-outline" />
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getAllCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="react-table-pagination">
            <div className="react-table-pagination-nav">
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => table.firstPage()}
                  disabled={!table.getCanPreviousPage()}
                  prefixIcon={<Icon icon="arrowhead-left" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  prefixIcon={<Icon icon="arrow-ios-back" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  prefixIcon={<Icon icon="arrow-ios-forward" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => table.lastPage()}
                  disabled={!table.getCanNextPage()}
                  prefixIcon={<Icon icon="arrowhead-right" pack="eva" />}
                />
              </div>
            </div>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {table.getPageCount()}
              </strong>
            </span>
            <span>|</span>
            <span>Go to page: </span>
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(event) => {
                const page = event.target.value ? Number(event.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              style={{ width: '100px' }}
            />
            <span>Items per page: </span>
            <Select
              options={['10', '20', '30', '40', '50']}
              defaultSelected={pageSize.toString()}
              onSelect={(value) => table.setPageSize(Number(value as string))}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
