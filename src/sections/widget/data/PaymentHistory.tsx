import { useState, MouseEvent } from 'react';

// material-ui
import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  Stack,
  Typography
} from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';

// assets
import { Add, More } from 'iconsax-react';

import paypal from 'assets/images/widget/img-paypal.png';
import gpay from 'assets/images/widget/img-gpay.png';
import phonePay from 'assets/images/widget/img-phonepay.png';

// ==============================|| DATA WIDGET - PAYMENT HISTORY ||============================== //

const PaymentHistory = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard content={false}>
      <Box sx={{ p: 3, pb: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="h5">Payment History</Typography>
          <IconButton color="secondary" sx={{ color: 'secondary.darker' }}>
            <Add />
          </IconButton>
        </Stack>
      </Box>
      <List disablePadding sx={{ '& .MuiListItem-root': { px: 3, py: 1.5 } }}>
        <ListItem
          divider
          secondaryAction={
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <More style={{ transform: 'rotate(90deg)' }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar variant="rounded" color="secondary">
              <CardMedia component="img" alt="Paypal" src={paypal} sx={{ width: 24 }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Paypal"
            secondary={
              <Typography variant="subtitle1">
                +2,10,000{' '}
                <Typography variant="caption" color="success.main" component="span">
                  + 30.6%
                </Typography>
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          divider
          secondaryAction={
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <More style={{ transform: 'rotate(90deg)' }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar variant="rounded" color="secondary">
              <CardMedia component="img" alt="Gpay" src={gpay} sx={{ width: 24 }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Gpay"
            secondary={
              <Typography variant="subtitle1">
                -2000{' '}
                <Typography variant="caption" color="error.dark" component="span">
                  - 30.6%
                </Typography>
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          divider
          secondaryAction={
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <More style={{ transform: 'rotate(90deg)' }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar variant="rounded" color="secondary">
              <CardMedia component="img" alt="phone-pay" src={phonePay} sx={{ width: 24 }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Gpay"
            secondary={
              <Typography variant="subtitle1">
                -2000{' '}
                <Typography variant="caption" color="error.dark" component="span">
                  - 30.6%
                </Typography>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Stack direction="row" alignItems="center" spacing={1.25} sx={{ p: 3 }}>
        <Button variant="outlined" fullWidth color="secondary">
          View all
        </Button>
      </Stack>
      <Menu
        id="wallet-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'wallet-button',
          sx: { p: 1.25, minWidth: 150 }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <ListItemButton onClick={handleClose}>Name</ListItemButton>
        <ListItemButton onClick={handleClose}>Date</ListItemButton>
        <ListItemButton onClick={handleClose}>Rating</ListItemButton>
        <ListItemButton onClick={handleClose}>Unread</ListItemButton>
      </Menu>
    </MainCard>
  );
};

export default PaymentHistory;
