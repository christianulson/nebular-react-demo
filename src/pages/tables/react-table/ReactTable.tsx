import { Button, Card, Icon, Input, Select } from '@nebular-react/core';
import React, { useMemo } from 'react';
import { Column, usePagination, useSortBy, useTable } from 'react-table';
import personData from './data.json';
import useStyles from './ReactTable.styles';

export function ReactTableDemo() {
  const columns: Column[] = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Username',
        accessor: 'username'
      },
      {
        Header: 'E-mail',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age'
      }
    ],
    []
  );
  const data = useMemo(() => personData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headers,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data
    },
    useSortBy,
    usePagination
  );
  const { classes, cx } = useStyles();

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>React Table</Card.Header>
      <Card.Body>
        <div className="react-table-container">
          <table {...getTableProps()}>
            <thead>
              <tr className="titles">
                {headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span className="sort-icon">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon icon="chevron-down-outline" />
                        ) : (
                          <Icon icon="chevron-up-outline" />
                        )
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="react-table-pagination">
            <div className="react-table-pagination-nav">
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  prefixIcon={<Icon icon="arrowhead-left" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  prefixIcon={<Icon icon="arrow-ios-back" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  prefixIcon={<Icon icon="arrow-ios-forward" pack="eva" />}
                />
              </div>
              <div className="react-table-page-link">
                <Button
                  component="a"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  prefixIcon={<Icon icon="arrowhead-right" pack="eva" />}
                />
              </div>
            </div>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>|</span>
            <span>Go to page: </span>
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const _page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(_page);
              }}
              style={{ width: '100px' }}
            />
            <span>Items per page: </span>
            <Select
              options={['10', '20', '30', '40', '50']}
              defaultSelected={pageSize.toString()}
              onSelect={(value) => setPageSize(value)}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
