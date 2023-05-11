import { useState } from 'react';

// material-ui
import { Box, Stack, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - DATE RANGE ||============================== //

export default function DateRangePicker() {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  const rangeDatepickerCodeString = `<MainCard title="Date Range Picker" codeString={rangeDatepickerCodeString}>
  <Stack spacing={3}>
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Mobile start', end: 'Mobile end' }}>
      <MobileDateRangePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> To </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Desktop start', end: 'Desktop end' }}>
      <DesktopDateRangePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> To </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  </Stack>
</MainCard>`;

  return (
    <MainCard title="Date Range Picker" codeString={rangeDatepickerCodeString}>
      <Stack spacing={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Mobile start', end: 'Mobile end' }}>
          <MobileDateRangePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> To </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Desktop start', end: 'Desktop end' }}>
          <DesktopDateRangePicker
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> To </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
      </Stack>
    </MainCard>
  );
}
