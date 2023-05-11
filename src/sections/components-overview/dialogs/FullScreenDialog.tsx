import { forwardRef, useState, ReactElement, Ref } from 'react';

// material-ui
import {
  Avatar,
  AppBar,
  Button,
  Dialog,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Slide,
  Toolbar,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

// project-imports
import IconButton from 'components/@extended/IconButton';

// assets
import { Add } from 'iconsax-react';

const avatarImage = require.context('assets/images/users', true);

const Transition = forwardRef((props: TransitionProps & { children: ReactElement }, ref: Ref<unknown>) => (
  <Slide direction="up" ref={ref} {...props} />
));

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Add style={{ transform: 'rotate(45deg)' }} />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Set Backup Account
            </Typography>
            <Button color="primary" variant="contained" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List sx={{ p: 3 }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={avatarImage(`./avatar-1.png`)} />
            </ListItemAvatar>
            <ListItemText primary="Phone ringtone" secondary="Default" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={avatarImage(`./avatar-2.png`)} />
            </ListItemAvatar>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
}
