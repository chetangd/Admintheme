import { useCallback, useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import CustomTable from '../../components/CustomTable';

import { Add, Edit, Eye, Trash } from 'iconsax-react';

import { Chip, Stack, Tooltip, Typography } from '@mui/material';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import NumberFormat from 'react-number-format';
import View from './View';

const avatarImage = require.context('assets/images/users', true);

const List = ({ tableData, onOpenAddForm }) => {
  const theme = useTheme();

  const [customerDeleteId, setCustomerDeleteId] = useState('');

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: 'Staff Name',
        accessor: 'fatherName',
        Cell: ({ row }) => {
          const { values } = row;
          return (
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              onClick={(e) => {
                e.stopPropagation();
                row.toggleRowExpanded();
              }}
            >
              <Avatar alt="Avatar 1" size="sm" src={avatarImage(`./avatar-${!values.avatar ? 1 : values.avatar}.png`)} />
              <Stack spacing={0}>
                <Typography variant="subtitle1">{values.fatherName}</Typography>
                <Typography color="text.secondary">{values.email}</Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'Avatar',
        accessor: 'avatar',
        disableSortBy: true
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Contact',
        accessor: 'contact',
        Cell: ({ value }) => <NumberFormat displayType="text" format="+91 (###) ###-####" mask="_" defaultValue={value} />
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Rejected" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Verified" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Pending" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Actions',
        className: 'cell-center',
        disableSortBy: true,
        Cell: ({ row }) => {
          const collapseIcon = row.isExpanded ? <Add style={{ color: theme.palette.error.main, transform: 'rotate(45deg)' }} /> : <Eye />;
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton
                  color="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    row.toggleRowExpanded();
                  }}
                >
                  {collapseIcon}
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAddForm(row.values);
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    //  handleClose();
                    setCustomerDeleteId(row.values.id);
                  }}
                >
                  <Trash />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const renderRowSubComponent = useCallback(({ row }) => <View data={tableData[Number(row.id)]} />, [tableData]);

  return <CustomTable columns={columns} data={tableData} handleAdd={onOpenAddForm} renderRowSubComponent={renderRowSubComponent} />;
};

export default List;
