// material-ul
import MainCard from 'components/MainCard';
import { Button, Grid } from '@mui/material';

// project-imports
import toast from 'utils/ToastNotistack';

// ==============================|| NOTISTACK - POSTIONING ||============================== //

export default function PositioningSnackbar() {
  const NotiStackPositioningCodeString = `<Button
  variant="contained"
  onClick={() =>
    toast('This is default message.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    })
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    toast('his is success message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    })
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    toast('This is warning message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }
>
  Top-right
</Button>
<Button
  variant="contained"
  onClick={() =>
    toast('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    })
  }
>
  Bottom-left
</Button>
<Button
  variant="contained"
  onClick={() =>
    toast('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    })
  }
>
  Bottom-center
</Button>
<Button
  variant="contained"
  onClick={() =>
    toast('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    })
  }
>
  Bottom-Right
</Button>`;

  return (
    <MainCard title="Positioning" codeString={NotiStackPositioningCodeString}>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('This is default message.', {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'left'
                }
              })
            }
          >
            Top-Left
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('his is success message', {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center'
                }
              })
            }
          >
            Top-Center
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('This is warning message', {
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                }
              })
            }
          >
            Top-right
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('This is info message', {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left'
                }
              })
            }
          >
            Bottom-left
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('This is info message', {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center'
                }
              })
            }
          >
            Bottom-center
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() =>
              toast('This is info message', {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right'
                }
              })
            }
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
}
