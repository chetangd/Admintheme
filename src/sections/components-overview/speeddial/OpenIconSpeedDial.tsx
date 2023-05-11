import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { Copy, Edit, Heart, Printer, Save2, Share } from 'iconsax-react';

// =============================|| SPEEDDIAL - CUSTOM CLOSE ICON ||============================= //

export default function OpenIconSpeedDial() {
  const theme = useTheme();

  // fab action options
  const actions = [
    { icon: <Copy style={{ fontSize: '1.15rem' }} />, name: 'Copy' },
    { icon: <Save2 style={{ fontSize: '1.15rem' }} />, name: 'Save' },
    { icon: <Printer style={{ fontSize: '1.15rem' }} />, name: 'Print' },
    { icon: <Share style={{ color: theme.palette.secondary.main, fontSize: '1.15rem' }} />, name: 'Share' },
    { icon: <Heart style={{ fontSize: '1.15rem' }} />, name: 'Like' }
  ];

  const [open, setOpen] = useState(false);
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

  const customSpeeddialCodeString = `<Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
  <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  <SpeedDial
    ariaLabel="SpeedDial openIcon example"
    hidden={hidden}
    icon={<SpeedDialIcon openIcon={<Edit style={{ fontSize: '1.3rem' }} />} />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
  >
    {actions.map((action) => (
      <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
    ))}
  </SpeedDial>
</Box>`;

  return (
    <MainCard title="Custom Close Icon" codeString={customSpeeddialCodeString}>
      <Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          hidden={hidden}
          icon={<SpeedDialIcon openIcon={<Edit style={{ fontSize: '1.3rem' }} />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
        >
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
          ))}
        </SpeedDial>
      </Box>
    </MainCard>
  );
}
