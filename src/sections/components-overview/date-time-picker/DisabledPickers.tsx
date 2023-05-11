import { useState } from 'react';

// material-ui
import { Box, Stack, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - DISABLED ||============================== //

export default function DisabledPickers() {
  const [value, setValue] = useState<Date | null>(null);
  const [valueRange, setValueRange] = useState<DateRange<Date>>([null, null]);

  const disabledDatepickerCodeString = `<MainCard title="Disabled Pickers" codeString={disabledDatepickerCodeString}>
  <Stack spacing={3}>
    <Typography variant="h6">Date Picker</Typography>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="disabled"
        disabled
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <DatePicker
        label="read-only"
        readOnly
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>

    <Typography variant="h6">Date Range Picker</Typography>
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'disabled start', end: 'disabled end' }}>
      <DateRangePicker
        disabled
        value={valueRange}
        onChange={(newValue: any) => {
          setValueRange(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'read-only start', end: 'read-only end' }}>
      <DateRangePicker
        readOnly
        value={valueRange}
        onChange={(newValue: any) => {
          setValueRange(newValue);
        }}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>

    <Typography variant="h6">Date Time Picker</Typography>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label="disabled"
        disabled
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <DateTimePicker
        label="read-only"
        readOnly
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />

      <Typography variant="h6">Time Picker</Typography>
      <TimePicker
        label="disabled"
        disabled
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <TimePicker
        label="read-only"
        readOnly
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  </Stack>
</MainCard>`;

  return (
    <MainCard title="Disabled Pickers" codeString={disabledDatepickerCodeString}>
      <Stack spacing={3}>
        <Typography variant="h6">Date Picker</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disabled
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="disabled" />}
          />
          <DatePicker
            readOnly
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="read-only" />}
          />
        </LocalizationProvider>

        <Typography variant="h6">Date Range Picker</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'disabled start', end: 'disabled end' }}>
          <DateRangePicker
            disabled
            value={valueRange}
            onChange={(newValue: any) => {
              setValueRange(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'read-only start', end: 'read-only end' }}>
          <DateRangePicker
            readOnly
            value={valueRange}
            onChange={(newValue: any) => {
              setValueRange(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>

        <Typography variant="h6">Date Time Picker</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            disabled
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="disabled" />}
          />
          <DateTimePicker
            readOnly
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="read-only" />}
          />

          <Typography variant="h6">Time Picker</Typography>
          <TimePicker
            disabled
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="disabled" />}
          />
          <TimePicker
            readOnly
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} placeholder="read-only" />}
          />
        </LocalizationProvider>
      </Stack>
    </MainCard>
  );
}
