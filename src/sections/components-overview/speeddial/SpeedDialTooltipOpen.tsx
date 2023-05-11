import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Backdrop, Box, Button, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { Copy, Heart, Printer, Save2, Share } from 'iconsax-react';

// =============================|| SPEEDDIAL - PERSISTENT ICON ||============================= //

export default function SpeedDialTooltipOpen() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // fab action options
  const actions = [
    { icon: <Copy style={{ fontSize: '1.15rem' }} />, name: 'Copy' },
    { icon: <Save2 style={{ fontSize: '1.15rem' }} />, name: 'Save' },
    { icon: <Printer style={{ fontSize: '1.15rem' }} />, name: 'Print' },
    { icon: <Share style={{ color: theme.palette.secondary.main, fontSize: '1.15rem' }} />, name: 'Share' },
    { icon: <Heart style={{ fontSize: '1.15rem' }} />, name: 'Like' }
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hidden, setHidden] = useState(false);
  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const persistSpeeddialCodeString = `<Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
  <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  <Backdrop open={open} />
  <SpeedDial
    ariaLabel="SpeedDial tooltip example"
    hidden={hidden}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
        tooltipOpen
        onClick={handleClose}
      />
    ))}
  </SpeedDial>
</Box>`;

  return (
    <MainCard title="Persistent Icon" codeString={persistSpeeddialCodeString}>
      <Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </MainCard>
  );
}
