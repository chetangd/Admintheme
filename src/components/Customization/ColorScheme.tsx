import { ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// types
import { PresetColor } from 'types/config';
import { TickSquare } from 'iconsax-react';

interface ColorProps {
  id: PresetColor;
  primary: string;
  darker: string;
}

// ==============================|| CUSTOMIZATION - COLOR SCHEME ||============================== //

const ColorScheme = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const { presetColor, onChangePresetColor } = useConfig();

  const colorOptions: ColorProps[] = [
    {
      id: 'default',
      primary: mode === 'dark' ? '#4680FF' : '#4680FF',
      darker: mode === 'dark' ? '#2F63FF' : '#2F63FF'
    },
    {
      id: 'theme1',
      primary: mode === 'dark' ? '#305bdd' : '#3366FF',
      darker: mode === 'dark' ? '#a9c5f8' : '#102693'
    },
    {
      id: 'theme2',
      primary: mode === 'dark' ? '#655ac8' : '#7265E6',
      darker: mode === 'dark' ? '#c3baf4' : '#5549DB'
    },
    {
      id: 'theme3',
      primary: mode === 'dark' ? '#0a7d3e' : '#068e44',
      darker: mode === 'dark' ? '#173123' : '#001c0f'
    },
    {
      id: 'theme4',
      primary: mode === 'dark' ? '#5d7dcb' : '#3c64d0',
      darker: mode === 'dark' ? '#212841' : '#0d1b5e'
    },
    {
      id: 'theme5',
      primary: mode === 'dark' ? '#d26415' : '#f27013',
      darker: mode === 'dark' ? '#f8c48c' : '#802800'
    },
    {
      id: 'theme6',
      primary: mode === 'dark' ? '#288d99' : '#2aa1af',
      darker: mode === 'dark' ? '#96d0d0' : '#06323d'
    },
    {
      id: 'theme7',
      primary: mode === 'dark' ? '#05934c' : '#00a854',
      darker: mode === 'dark' ? '#61ca8b' : '#003620'
    },
    {
      id: 'theme8',
      primary: mode === 'dark' ? '#058478' : '#009688',
      darker: mode === 'dark' ? '#59b8a5' : '#002424'
    }
  ];

  const handlePresetColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePresetColor(event.target.value as PresetColor);
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={presetColor} onChange={handlePresetColorChange}>
      <Stack direction="row" alignItems="center" sx={{ width: '100%' }} spacing={0.5}>
        {colorOptions.map((color, index) => (
          <FormControlLabel
            key={index}
            control={<Radio value={color.id} sx={{ display: 'none' }} />}
            sx={{ m: 0, width: presetColor === color.id ? '100%' : 'auto', display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{
                  bgcolor: color.primary,
                  p: 1,
                  borderRadius: 0.5,
                  borderWidth: 4,
                  borderColor: presetColor === color.id ? color.darker : color.primary,
                  '&:hover': { borderColor: color.darker }
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: presetColor === color.id ? '100%' : 1, height: 44 }}
                >
                  {presetColor === color.id && <TickSquare variant="Bulk" color={theme.palette.common.white} />}
                </Stack>
              </MainCard>
            }
          />
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default ColorScheme;
