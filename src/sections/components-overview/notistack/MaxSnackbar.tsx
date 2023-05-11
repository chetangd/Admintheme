import { useState } from 'react';

// material-ul
import { Button, Typography, Stack } from '@mui/material';

// project-imports
import toast from 'utils/ToastNotistack';
import { handlerIncrease } from 'store/reducers/snackbar';
import MainCard from 'components/MainCard';
import { dispatch, useSelector } from 'store';

// assets
import { Add, Minus } from 'iconsax-react';

// ==============================|| NOTISTACK - MAXIMUM SNACKBAR ||============================== //

export default function MaxSnackbar() {
  const width = { minWidth: 'auto' };

  const snackbar = useSelector((state) => state.snackbar);
  const [value, setValue] = useState<number>(3);

  const handlerMaxStack = () => {
    toast('Your notification here');
    dispatch(
      handlerIncrease({
        maxStack: value
      })
    );
  };

  const NotiStackMaxSnackbarCodeString = `<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  toast('Your notification here');
  dispatch(
    handlerIncrease({
      maxStack: value
    })
  );
}}
>
  Show Snackbar
</Button>`;

  return (
    <MainCard title="Maximum snackbars" codeString={NotiStackMaxSnackbarCodeString}>
      <Stack justifyContent={'space-between'} flexDirection={'row'}>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 0 ? true : false}
          onClick={() => setValue((prev) => prev - 1)}
        >
          <Minus />
        </Button>
        <Typography variant="body1">stack up to {value}</Typography>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 4 ? true : false}
          onClick={() => setValue((prev) => prev + 1)}
        >
          <Add />
        </Button>
      </Stack>
      <Button variant="contained" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => handlerMaxStack()}>
        Show Snackbar
      </Button>
    </MainCard>
  );
}
