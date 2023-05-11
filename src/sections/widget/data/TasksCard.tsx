import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, CardContent, Grid, Link, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';

// assets
import { TickCircle } from 'iconsax-react';

// ==============================|| DATA WIDGET - TASKS ||============================== //

const TasksCard = () => (
  <MainCard
    title="Tasks"
    content={false}
    secondary={
      <Link component={RouterLink} to="#" color="primary">
        View all
      </Link>
    }
  >
    <CardContent>
      <Grid
        container
        spacing={3.5}
        alignItems="center"
        sx={{
          position: 'relative',
          '&>*': {
            position: 'relative',
            zIndex: '5'
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 30,
            left: 34,
            width: 2,
            height: `calc(100% - 30px)`,
            bgcolor: 'divider',
            zIndex: '1'
          }
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Box sx={{ color: 'success.main', marginLeft: -0.5 }}>
                <TickCircle variant="Bold" />
              </Box>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography align="left">8:50</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="h5" color="text.secondary">
                    You’re getting more and more followers, keep it up!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Dot size={14} color="primary" componentDiv sx={{ mt: 0.5 }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography align="left">Sat, 5 Mar</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="h5" color="text.secondary">
                    Design mobile Application
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Dot size={14} color="error" componentDiv sx={{ mt: 0.5 }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography align="left">Sun, 17 Feb</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="h5" color="text.secondary">
                    <Link component={RouterLink} to="#" underline="hover">
                      Jenny
                    </Link>{' '}
                    assign you a task{' '}
                    <Link component={RouterLink} to="#" underline="hover">
                      Mockup Design
                    </Link>
                    .
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Dot size={14} color="warning" componentDiv sx={{ mt: 0.5 }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography align="left">Sat, 18 Mar</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="h5" color="text.secondary">
                    Design logo
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Dot size={14} color="success" componentDiv sx={{ mt: 0.5 }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Typography align="left">Sat, 22 Mar</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="left" variant="h5" color="text.secondary">
                    Design mobile Application
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Dot size={14} color="secondary" componentDiv sx={{ mt: -1.5 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </MainCard>
);

export default TasksCard;
