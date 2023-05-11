// material-ui
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import AntAvatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';

// assets
import { More } from 'iconsax-react';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| LIST - USER ||============================== //

const UserList = () => {
  const userListCodeString = `<List sx={{ p: 0 }}>
  <ListItem
    divider
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <More />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <AntAvatar alt="Avatar" src={avatarImage('./avatar-4.png')} />
    </ListItemAvatar>
    <ListItemText primary="Jone Doe" secondary="Developer" />
  </ListItem>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <More />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <AntAvatar alt="Avatar" src={avatarImage('./avatar-5.png')} />
    </ListItemAvatar>
    <ListItemText primary="Aidal Danny" secondary="Project Leader" />
  </ListItem>
</List>`;

  return (
    <MainCard content={false} codeString={userListCodeString}>
      <List sx={{ p: 0 }}>
        <ListItem
          divider
          secondaryAction={
            <IconButton edge="end" aria-label="delete" color="secondary">
              <More size={20} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <AntAvatar alt="Avatar" src={avatarImage(`./avatar-4.png`)} />
          </ListItemAvatar>
          <ListItemText primary="Jone Doe" secondary="Developer" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" color="secondary">
              <More size={20} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <AntAvatar alt="Avatar" src={avatarImage(`./avatar-5.png`)} />
          </ListItemAvatar>
          <ListItemText primary="Aidal Danny" secondary="Project Leader" />
        </ListItem>
      </List>
    </MainCard>
  );
};

export default UserList;
