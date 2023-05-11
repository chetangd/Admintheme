// material-ui
import { alpha, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// project-imports
import ThemeOption from './theme';

// types
import { PaletteThemeProps } from 'types/theme';
import { PresetColor } from 'types/config';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode: PaletteMode, presetColor: PresetColor, themeContrast: boolean) => {
  const paletteColor: PaletteThemeProps = ThemeOption(presetColor, mode);

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: mode === 'dark' ? alpha(paletteColor.secondary.darker!, 0.87) : paletteColor.secondary[800],
        secondary: mode === 'dark' ? alpha(paletteColor.secondary.darker!, 0.45) : paletteColor.secondary.main,
        disabled: mode === 'dark' ? alpha(paletteColor.secondary.darker!, 0.1) : paletteColor.secondary[400]
      },
      action: {
        disabled: paletteColor.secondary.light
      },
      divider: mode === 'dark' ? alpha(paletteColor.secondary.darker!, 0.05) : alpha(paletteColor.secondary.light!, 0.65),
      background: {
        paper: mode === 'dark' ? paletteColor.secondary[100] : '#fff',
        default: themeContrast && mode !== 'dark' ? '#fff' : paletteColor.secondary.lighter
      }
    }
  });
};

export default Palette;
