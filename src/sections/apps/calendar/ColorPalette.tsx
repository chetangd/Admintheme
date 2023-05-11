// material-ui
import { Box, FormControlLabel, Radio, Tooltip } from '@mui/material';

// project-imports
import Avatar from 'components/@extended/Avatar';

// assets
import { TickSquare } from 'iconsax-react';

// ==============================|| CALENDAR - COLOR PALETTE ||============================== //

interface Props {
  color: string;
  value: string;
  isLight?: boolean;
}

const ColorPalette = ({ color, value, isLight }: Props) => (
  <Tooltip title={color}>
    <FormControlLabel
      value={value}
      label=""
      control={
        <Radio
          disableRipple
          icon={
            <Avatar variant="rounded" type="combined" size="xs" sx={{ backgroundColor: color, borderColor: 'divider' }}>
              <Box sx={{ display: 'none' }} />
            </Avatar>
          }
          checkedIcon={
            <Avatar
              variant="rounded"
              type="combined"
              size="xs"
              sx={{
                backgroundColor: color,
                color: isLight ? 'secondary.dark' : 'secondary.lighter',
                borderColor: 'divider',
                '& svg': { width: 20, height: 20 }
              }}
            >
              <TickSquare variant="Bold" />
            </Avatar>
          }
          sx={{
            '&:hover': {
              bgcolor: 'transparent'
            }
          }}
        />
      }
    />
  </Tooltip>
);

export default ColorPalette;
