import { ReactNode } from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// third-party
import { SnackbarProvider } from 'notistack';

// project-imports
import { useSelector } from 'store';
import { SnackbarUtilsConfigurator } from 'utils/ToastNotistack';

// assets
import { CloseCircle, InfoCircle, TickCircle, Warning2 } from 'iconsax-react';

// custom styles
const StyledSnackbarProvider = styled(SnackbarProvider)(({ theme }) => ({
  '&.SnackbarItem-variantError': {
    backgroundColor: theme.palette.error.main
  },
  '&.SnackbarItem-variantSuccess': {
    backgroundColor: theme.palette.success.main
  },
  '&.SnackbarItem-variant': {
    backgroundColor: theme.palette.success.main
  },
  '&.SnackbarItem-variantInfo': {
    backgroundColor: theme.palette.info.main
  },
  '&.SnackbarItem-variantWarning': {
    backgroundColor: theme.palette.warning.light
  }
}));

// ===========================|| SNACKBAR - NOTISTACK ||=========================== //

const Notistack = ({ children }: { children: ReactNode }) => {
  const snackbar = useSelector((state) => state.snackbar);
  const iconSX = { marginRight: 8, fontSize: '1.15rem' };

  return (
    <StyledSnackbarProvider
      maxSnack={snackbar.maxStack}
      dense={snackbar.dense}
      iconVariant={
        snackbar.iconVariant === 'useemojis'
          ? {
              success: <TickCircle style={iconSX} />,
              error: <CloseCircle style={iconSX} />,
              warning: <Warning2 style={iconSX} />,
              info: <InfoCircle style={iconSX} />
            }
          : undefined
      }
      hideIconVariant={snackbar.iconVariant === 'hide' ? true : false}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </StyledSnackbarProvider>
  );
};

export default Notistack;
