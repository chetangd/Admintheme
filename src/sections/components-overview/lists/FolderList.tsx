// material-ui
import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
import { Camera, DocumentFilter, Gps } from 'iconsax-react';

// ==============================|| LIST - FOLDER ||============================== //

export default function FolderList() {
  const folderListCodeString = `<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
  <ListItem>
    <ListItemAvatar>
      <Avatar alt="Basic" type="combined" color="warning">
        <Camera />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar alt="Basic" type="combined">
        <DocumentFilter />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar alt="Basic" type="combined" color="info">
        <Gps />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Vacation" secondary="July 20, 2014" />
  </ListItem>
</List>`;

  return (
    <MainCard content={false} codeString={folderListCodeString}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Basic" type="combined" color="warning">
              <Camera variant="Bold" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Basic" type="combined">
              <DocumentFilter variant="Bold" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Basic" type="combined" color="info">
              <Gps variant="Bold" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </MainCard>
  );
}
