import { useState, forwardRef, useCallback } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Button, Card, Typography, CardActions, IconButton, Collapse, Paper } from '@mui/material';

// third-party
import { useSnackbar, SnackbarContent, SnackbarKey, SnackbarMessage } from 'notistack';

// project-imports
import MainCard from 'components/MainCard';
import toast from 'utils/ToastNotistack';

// assets
import { Add, ArrowDown2, TickCircle } from 'iconsax-react';

const SnackbarBox = styled(SnackbarContent)(({ theme }) => ({
  '@media (min-width:600px)': {
    minWidth: '344px !important'
  }
}));

// ==============================|| NOTISTACK - CUSTOM ||============================== //

const CustomNotistack = forwardRef((props: any, ref: any) => {
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = useCallback(() => {
    setExpanded((prevState: boolean) => !prevState);
  }, []);

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarBox ref={ref}>
      <Card sx={{ bgcolor: 'warning.light', width: '100%' }}>
        <CardActions sx={{ padding: '8px 8px 8px 16px', justifyContent: 'space-between' }}>
          <Typography variant="subtitle2">{props.message}</Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton
              aria-label="Show more"
              sx={{ p: 1, transition: 'all .2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              onClick={handleExpandClick}
            >
              <ArrowDown2 />
            </IconButton>
            <IconButton sx={{ p: 1, transition: 'all .2s' }} onClick={handleDismiss}>
              <Add style={{ transform: 'rotate(45deg)' }} />
            </IconButton>
          </Box>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper sx={{ padding: 2, borderTopLeftRadius: 0, borderTopRightRadius: 0, bgcolor: 'warning.lighter' }}>
            <Typography gutterBottom>PDF ready</Typography>
            <Button
              size="small"
              startIcon={<TickCircle variant="Bold" style={{ fontSize: 16, marginTop: -2 }} />}
              sx={{ '&:hover': { bgcolor: 'transparent' } }}
            >
              Download now
            </Button>
          </Paper>
        </Collapse>
      </Card>
    </SnackbarBox>
  );
});

// ==============================|| NOTISTACK - CUSTOM STYLE ||============================== //

export default function CustomComponent() {
  const NotistackCustomCodeString = `<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    toast("You're report is ready", {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      content: (key: SnackbarKey, message: SnackbarMessage) => <CustomNotistack id={key} message={message} />
    });
  }}
>
  Show snackbar
</Button>`;

  return (
    <MainCard title="Custom Component" codeString={NotistackCustomCodeString}>
      <Button
        variant="outlined"
        fullWidth
        sx={{ marginBlockStart: 2 }}
        onClick={() => {
          toast("You're report is ready", {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            },
            content: (key: SnackbarKey, message: SnackbarMessage) => <CustomNotistack id={key} message={message} />
          });
        }}
      >
        Show snackbar
      </Button>
    </MainCard>
  );
}
