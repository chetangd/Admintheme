import { useMemo, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery
} from '@mui/material';

// third-party
import { useFilters, useGlobalFilter, useSortBy, useTable, usePagination, Column, HeaderGroup, Row, Cell } from 'react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import Avatar from 'components/@extended/Avatar';
import { SortingSelect, TablePagination } from 'components/third-party/ReactTable';

import makeData from 'data/react-table';
import { renderFilterTypes, GlobalFilter } from 'utils/react-table';

// assets
import { ArrowDown, ArrowUp, Star1 } from 'iconsax-react';

const productImage = require.context('assets/images/widget', true);

// ==============================|| REACT TABLE ||============================== //

interface Props {
  columns: Column[];
  data: [];
}

function ReactTable({ columns, data }: Props) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const sortBy = { id: 'fatherName', desc: false };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    allColumns,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    setSortBy
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 4, hiddenColumns: ['avatar'], sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  const [age, setAge] = useState('10');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Stack spacing={3}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <Typography variant="h5">Products</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={age} onChange={handleChange}>
                  <MenuItem value={10}>Today</MenuItem>
                  <MenuItem value={20}>Weekly</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Box>

        <Stack
          direction={matchDownSM ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 3, py: 0 }}
        >
          <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          <Stack direction={matchDownSM ? 'column' : 'row'} alignItems="center" spacing={1.5}>
            <SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} />
          </Stack>
        </Stack>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: HeaderGroup<{}>) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: HeaderGroup<{}>) => (
                  <TableCell {...column.getHeaderProps([{ className: column.className }])}>{column.render('Header')}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row: Row, i: number) => {
              prepareRow(row);

              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell: Cell<{}>) => (
                    <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </>
  );
}

// ==============================|| DATA WIDGET - PRODUCTS ||============================== //

const Products = () => {
  const theme = useTheme();
  const data = useMemo(() => makeData(10), []);

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Products',
        accessor: 'fatherName',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar alt="Avatar 1" size="lg" variant="rounded" src={productImage(`./img-prod-${randomIntFromInterval(1, 4)}.jpg`)} />
              <Stack spacing={0}>
                <Typography variant="subtitle1">{values.fatherName}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', lg: 'inherit' } }}>
                  Leather panels. Laces. Rounded toe.
                </Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Close" size="small" sx={{ borderRadius: 1 }} />;
            case 'Relationship':
              return <Chip color="success" label="Active" size="small" sx={{ borderRadius: 1 }} />;
            case 'Single':
            default:
              return <Chip color="warning" label="Pending" size="small" sx={{ borderRadius: 1 }} />;
          }
        }
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        disableSortBy: true
      },
      {
        Header: 'Price',
        accessor: 'age',
        className: 'cell-right',
        Cell: ({ value }: { value: number }) => <Typography variant="subtitle1">${value}</Typography>
      },
      {
        Header: 'Sales',
        accessor: 'visits',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" alignItems="center" spacing={0.75}>
              <Typography variant="subtitle1">{values.visits}</Typography>
              <>
                {values.age > 30 ? (
                  <Typography variant="caption" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                    +{(values.age * 3) / 10}
                    <ArrowUp size={12} />
                  </Typography>
                ) : (
                  <Typography variant="caption" color="error.dark" sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                    -{(values.age * 3) / 10}
                    <ArrowDown size={12} />
                  </Typography>
                )}
              </>
              <Typography></Typography>
            </Stack>
          );
        }
      },
      {
        Header: 'Rating',
        accessor: 'progress',
        Cell: ({ value }: { value: number }) => {
          return (
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Star1 variant="Bold" color={theme.palette.warning.main} size={18} />
              <Typography variant="subtitle1">{randomIntFromInterval(1, 10) / 2}</Typography>
              <Typography color="text.secondary">({value})</Typography>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  return (
    <MainCard content={false}>
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

export default Products;
