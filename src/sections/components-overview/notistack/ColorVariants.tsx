// material-ul
import { Button, Grid } from '@mui/material';

// project-imports
import toast from 'utils/ToastNotistack';
import MainCard from 'components/MainCard';

// ==============================|| NOTISTACK - COLOR VARIANTS ||============================== //

export default function ColorVariants() {
  const NotiStackSnackbarCodeString = `<Button variant="contained" onClick={() => toast('This is default message.')}>
  Default
</Button>
<Button variant="contained" onClick={() => toast('his is success message', { variant: 'success' })}>
  success
</Button>
<Button variant="contained" onClick={() => toast('his is warning message', { variant: 'warning' })}>
  Warning
</Button>
<Button variant="contained" onClick={() => toast('his is info message', { variant: 'info' })}>
  Info
</Button>
<Button variant="contained" onClick={() => toast('his is error message', { variant: 'error' })}>
  Error
</Button>
`;

  return (
    <MainCard title="Color Variants" codeString={NotiStackSnackbarCodeString}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => toast('This is default message.')}>
            Default
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success" onClick={() => toast('his is success message', { variant: 'success' })}>
            Success
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="warning" onClick={() => toast('This is warning message', { variant: 'warning' })}>
            Warning
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="info" onClick={() => toast('This is info message', { variant: 'info' })}>
            Info
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="error" onClick={() => toast('This is info message', { variant: 'error' })}>
            Error
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
}
