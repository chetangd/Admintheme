import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Drawer as MuiDrawer, TextField } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import DrawerContent from './DrawerContent';
import { DRAWER_WIDTH } from 'config';

// assets
import { SearchNormal1 } from 'iconsax-react';

// ==============================|| DRAWER ||============================== //

interface Props {
  handleDrawerOpen: () => void;
  open: boolean;
}

const Drawer = ({ handleDrawerOpen, open }: Props) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const [searchValue, setSearchValue] = useState();

  const handleSearchValue = (event: any) => {
    const search = event.target.value.trim().toLowerCase();
    setSearchValue(search);
  };

  return (
    <MuiDrawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        position: { xs: 'fixed', md: 'sticky' },
        top: { xs: 0, md: 84, xl: 90 },
        height: { xs: 'auto', md: 'calc(100vh - 140px)', xl: 'calc(100vh - 148px)' },
        zIndex: { xs: 1200, md: 0 },
        '& .MuiDrawer-paper': {
          borderRadius: matchDownMd ? 0 : 1.5,
          position: 'relative',
          border: 'none'
        }
      }}
      variant={matchDownMd ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      <MainCard sx={{ height: '100%', borderRadius: matchDownMd ? 0 : 1.5 }} content={false}>
        <Box sx={{ p: 3, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <TextField
            fullWidth
            autoFocus
            InputProps={{
              startAdornment: <SearchNormal1 />,
              placeholder: 'Search Components',
              type: 'search'
            }}
            onChange={handleSearchValue}
          />
        </Box>
        <DrawerContent searchValue={searchValue} />
      </MainCard>
    </MuiDrawer>
  );
};

export default Drawer;
