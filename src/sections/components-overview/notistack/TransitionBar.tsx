import { useState, ChangeEvent } from 'react';

// material-ul
import { Button, FormControl, Radio, FormControlLabel, RadioGroup, Grow, Slide, Fade, Zoom } from '@mui/material';

// project-imports
import toast from 'utils/ToastNotistack';
import MainCard from 'components/MainCard';

// ==============================|| NOTISTACK - TRANSITIONS ||============================== //

export default function TransitionBar() {
  const [value, setValue] = useState<string>('slide');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    switch (value) {
      case 'slide':
        toast('Your notification here', { TransitionComponent: Slide });
        break;
      case 'grow':
        toast('Your notification here', { TransitionComponent: Grow });
        break;
      case 'fade':
        toast('Your notification here', { TransitionComponent: Fade });
        break;
      case 'zoom':
        toast('Your notification here', { TransitionComponent: Zoom });
        break;
      default:
        toast('Your notification here', { TransitionComponent: Slide });
        break;
    }
  };

  const NotiStackSnackbarCodeString = `<Button variant="contained" 
  onClick={() => toast('Your notification here', { TransitionComponent: Slide })>
  Slide
</Button>
<Button variant="contained" 
  onClick={() => toast('Your notification here', { TransitionComponent: Grow })>
  Grow
</Button>
<Button variant="contained" 
  onClick={() => toast('Your notification here', { TransitionComponent: Fade })>
  Fade
</Button>
<Button variant="contained" 
  onClick={() => toast('Your notification here', { TransitionComponent: Zoom })>
  Zoom
</Button>`;

  return (
    <MainCard title="Animation" codeString={NotiStackSnackbarCodeString}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          value={value}
          onChange={handleChange}
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="slide" control={<Radio />} label="Slide" />
          <FormControlLabel value="grow" control={<Radio />} label="Grow" />
          <FormControlLabel value="fade" control={<Radio />} label="Fade" />
          <FormControlLabel value="zoom" control={<Radio />} label="Zoom" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => handleClick()}>
        Show Snackbar
      </Button>
    </MainCard>
  );
}
