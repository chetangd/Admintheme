// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// assets
import { ArrowDown3, ArrowUp3 } from 'iconsax-react';

// ==============================|| INVOICE - CARD  ||============================== //

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  color?: any;
  children: any;
  invoice: string;
}

const TableWidgetCard = ({ color, title, count, percentage, isLoss, children, invoice }: Props) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item md={5}>
        <Stack direction="column" spacing={2}>
          <Typography variant="subtitle1">{title}</Typography>
          <Stack direction="column" spacing={1}>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="subtitle1">{invoice}</Typography>
              <Typography color="secondary">invoices</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={7}>
        <Box>
          <Stack direction="column" alignItems="flex-end" justifyContent="space-evenly">
            {percentage && (
              <Stack sx={{ ml: 1.25, pl: 1 }} direction="row" alignItems="center" spacing={1}>
                {!isLoss && <ArrowUp3 variant="Bold" style={{ fontSize: '0.75rem', color: `${color}` }} />}
                {isLoss && <ArrowDown3 variant="Bold" style={{ fontSize: '0.75rem', color: `${color}` }} />}
                <Typography color="secondary">{percentage}%</Typography>
              </Stack>
            )}
            {children}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TableWidgetCard;
