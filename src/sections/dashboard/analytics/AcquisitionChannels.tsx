// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, List, ListItemAvatar, ListItemButton, ListItemSecondaryAction, ListItemText, Stack, Typography } from '@mui/material';

// project-imports
import AcquisitionChart from './AcquisitionChart';
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

// assets
import { Chainlink, DocumentText } from 'iconsax-react';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| ANALYTICS - ACQUISITION CHANNELS ||============================== //

function AcquisitionChannels() {
  const theme = useTheme();
  return (
    <MainCard content={false}>
      <Stack>
        <List sx={{ p: 0, '& .MuiListItemButton-root': { pt: 2, pb: 0 } }}>
          <ListItemButton sx={{ '&:hover': { backgroundColor: 'transparent' }, cursor: 'text' }}>
            <ListItemText
              primary={<Typography variant="subtitle1">Acquisition Channels</Typography>}
              secondary={<Typography>Marketing</Typography>}
            />
            <Typography variant="h5" color="primary">
              -128
            </Typography>
          </ListItemButton>
        </List>
        <Box sx={{ pr: 2 }}>
          <AcquisitionChart />
        </Box>

        <List
          component="nav"
          sx={{
            p: 0,
            '& .MuiListItemButton-root': {
              py: 1.5,
              borderRadius: 0,
              '& .MuiAvatar-root': avatarSX,
              '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
            }
          }}
        >
          <ListItemButton divider>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: `${theme.palette.secondary.darker}`,
                  bgcolor: `${theme.palette.secondary[200]}`
                }}
              >
                <Chainlink />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant="subtitle1">Top Channels</Typography>} secondary="Today, 2:00 AM" />
            <ListItemSecondaryAction>
              <Stack alignItems="flex-end">
                <Typography variant="subtitle1">+ $1,430</Typography>
                <Typography color="text.secondary" noWrap>
                  35%
                </Typography>
              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.lighter'
                }}
              >
                <DocumentText />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant="subtitle1">Top Pages</Typography>} secondary="Today 6:00 AM" />
            <ListItemSecondaryAction>
              <Stack alignItems="flex-end">
                <Typography variant="subtitle1" noWrap>
                  - $1430
                </Typography>
                <Typography color="text.secondary" noWrap>
                  35%
                </Typography>
              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
        </List>
      </Stack>
    </MainCard>
  );
}

export default AcquisitionChannels;
