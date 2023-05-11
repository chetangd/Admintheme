import { useState, ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Radio, RadioGroup, Stack, useMediaQuery } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { dispatch, useSelector } from 'store';
import { openDrawer } from 'store/reducers/menu';

// assets
import defaultLayout from 'assets/images/customization/ltr.svg';
import rtlLayout from 'assets/images/customization/rtl.svg';
import miniMenu from 'assets/images/customization/mini-menu.svg';

// types
import { LAYOUT_CONST } from 'types/config';

// ==============================|| CUSTOMIZATION - LAYOUT ||============================== //

const ThemeLayout = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { miniDrawer, themeDirection, onChangeDirection, onChangeMiniDrawer, menuOrientation } = useConfig();
  const { drawerOpen } = useSelector((state) => state.menu);

  let initialTheme = 'default';
  if (miniDrawer === true) initialTheme = 'mini';
  if (themeDirection === 'rtl') initialTheme = 'rtl';

  const [value, setValue] = useState<string | null>(initialTheme);
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === 'default') {
      if (miniDrawer === true) {
        onChangeMiniDrawer(false);
      }
      if (themeDirection === 'rtl') {
        onChangeDirection('ltr');
      }
      if (!drawerOpen) {
        dispatch(openDrawer({ drawerOpen: true }));
      }
    }
    if (newValue === 'mini') {
      onChangeMiniDrawer(true);
      if (drawerOpen) {
        dispatch(openDrawer({ drawerOpen: false }));
      }
    }
    if (newValue === 'rtl') {
      onChangeDirection('rtl');
    }
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={value} onChange={handleRadioChange}>
      <Stack direction="row" alignItems="center" spacing={2.5} sx={{ width: '100%' }}>
        <FormControlLabel
          control={<Radio value="default" sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard
              content={false}
              sx={{ borderWidth: 2, p: 1, ...(value === 'default' && { borderColor: theme.palette.primary.main }) }}
            >
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={defaultLayout} alt="defaultLayout" />
              </Stack>
            </MainCard>
          }
        />
        {(menuOrientation === LAYOUT_CONST.VERTICAL_LAYOUT || downLG) && (
          <FormControlLabel
            control={<Radio value="mini" sx={{ display: 'none' }} />}
            sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(value === 'mini' && { borderColor: theme.palette.primary.main }) }}>
                <Stack direction="row" alignItems="center" justifyContent="center">
                  <CardMedia component="img" src={miniMenu} alt="miniMenu" />
                </Stack>
              </MainCard>
            }
          />
        )}
        <FormControlLabel
          control={<Radio value="rtl" sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(value === 'rtl' && { borderColor: theme.palette.primary.main }) }}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={rtlLayout} alt="rtlLayout" />
              </Stack>
            </MainCard>
          }
        />
      </Stack>
    </RadioGroup>
  );
};

export default ThemeLayout;
