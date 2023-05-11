import { useMemo } from 'react';

// material-ui
import { Box, Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable, useGroupBy, useExpanded, Column, Row, HeaderGroup, Cell } from 'react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { roundedMedian } from 'utils/react-table';

// assets
import { ArrowDown2, ArrowRight2, LayoutMaximize, Maximize1 } from 'iconsax-react';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }: { columns: Column[]; data: [] }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: { groupBy: ['age'] }
    },
    useGroupBy,
    useExpanded
  );

  const firstPageRows = rows.slice(0, 15);
  let groupedData = rows.map((d: Row) => d.original);
  Object.keys(groupedData).forEach((key: string) => groupedData[Number(key)] === undefined && delete groupedData[Number(key)]);

  return (
    <MainCard
      content={false}
      title="Grouping With Seperate Column"
      secondary={
        <Stack direction="row" spacing={2}>
          <Legend /> <CSVExport data={groupedData} filename={'grouping-seperate-column-table.csv'} />
        </Stack>
      }
    >
      <ScrollX>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: HeaderGroup<{}>, i: number) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: HeaderGroup<{}>, index: number) => {
                  const groupIcon = column.isGrouped ? <Maximize1 size={18} /> : <LayoutMaximize size={18} />;
                  return (
                    <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                      <Stack direction="row" spacing={1.15} alignItems="center" sx={{ display: 'inline-flex' }}>
                        {column.canGroupBy ? (
                          <Box
                            sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                            {...column.getGroupByToggleProps()}
                          >
                            {groupIcon}
                          </Box>
                        ) : null}
                        <Box>{column.render('Header')}</Box>
                      </Stack>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {firstPageRows.map((row: Row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell: Cell) => {
                    let bgcolor = 'background.paper';
                    if (cell.isGrouped) bgcolor = 'success.lighter';
                    if (cell.isAggregated) bgcolor = 'warning.lighter';
                    if (cell.isPlaceholder) bgcolor = 'error.lighter';

                    const collapseIcon = row.isExpanded ? <ArrowDown2 /> : <ArrowRight2 />;

                    return (
                      <TableCell {...cell.getCellProps([{ className: cell.column.className }])} sx={{ bgcolor }}>
                        {cell.isGrouped ? (
                          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: 'inline-flex' }}>
                            <Box sx={{ pr: 1.25, fontSize: '0.75rem', color: 'text.secondary' }} {...row.getToggleRowExpandedProps()}>
                              {collapseIcon}
                            </Box>
                            {cell.render('Cell')} ({row.subRows.length})
                          </Stack>
                        ) : cell.isAggregated ? (
                          cell.render('Aggregated')
                        ) : cell.isPlaceholder ? null : (
                          cell.render('Cell')
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollX>
    </MainCard>
  );
}

// ==============================|| LEGEND ||============================== //

function Legend() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
      <Chip color="success" variant="light" label="Grouped" />
      <Chip color="warning" variant="light" label="Aggregated" />
      <Chip color="error" variant="light" label="Repeated Value" />
    </Stack>
  );
}

// ==============================|| REACT TABLE - GROUPING TABLE ||============================== //

function GroupingTable({ data }: { data: [] }) {
  const columns = useMemo(
    () =>
      [
        {
          Header: 'First Name',
          accessor: 'firstName',
          aggregate: 'count',
          Aggregated: ({ value }: { value: number }) => `${value} Person`,
          disableGroupBy: true
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
          disableGroupBy: true
        },
        {
          Header: 'Email',
          accessor: 'email',
          disableGroupBy: true
        },
        {
          Header: 'Age',
          accessor: 'age',
          className: 'cell-right',
          aggregate: 'average',
          Aggregated: ({ value }: { value: number }) => `${Math.round(value * 100) / 100} (avg)`
        },
        {
          Header: 'Visits',
          accessor: 'visits',
          className: 'cell-right',
          aggregate: 'sum',
          Aggregated: ({ value }: { value: number }) => `${value} (total)`,
          disableGroupBy: true
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({ value }: { value: string }) => {
            switch (value) {
              case 'Complicated':
                return <Chip color="error" label="Complicated" size="small" variant="light" />;
              case 'Relationship':
                return <Chip color="success" label="Relationship" size="small" variant="light" />;
              case 'Single':
              default:
                return <Chip color="info" label="Single" size="small" variant="light" />;
            }
          }
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
          aggregate: roundedMedian,
          Aggregated: ({ value }: { value: number }) => `${value} (med)`,
          disableGroupBy: true,
          Cell: ({ value }: { value: number }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
        }
      ] as Column[],
    []
  );

  return <ReactTable columns={columns} data={data} />;
}

export default GroupingTable;
