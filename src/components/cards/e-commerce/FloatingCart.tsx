import { sum } from 'lodash';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Fab, Badge } from '@mui/material';

// types
import { CartProductStateProps } from 'types/cart';

// project-imports
import { useSelector } from 'store';

// assets
import { ShoppingCart } from 'iconsax-react';
import IconButton from 'components/@extended/IconButton';

// ==============================|| CART ITEMS - FLOATING BUTTON ||============================== //

const FloatingCart = () => {
  const theme = useTheme();

  const cart = useSelector((state) => state.cart);
  const totalQuantity = sum(cart.checkout.products.map((item: CartProductStateProps) => item.quantity));

  return (
    <Fab
      component={Link}
      to="/apps/e-commerce/checkout"
      size="large"
      variant="circular"
      sx={{
        borderRadius: 0,
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        top: '65%',
        position: 'fixed',
        right: 0,
        zIndex: theme.zIndex.speedDial,
        boxShadow: theme.customShadows.z1,
        bgcolor: 'background.paper',
        border: `4px solid ${theme.palette.background.paper}`,
        borderRight: 'none',
        '&:hover': {
          bgcolor: 'warning.lighter'
        }
      }}
    >
      <IconButton
        aria-label="settings toggler"
        size="large"
        sx={{ p: 0, '& :hover': { bgcolor: 'red' }, '& svg': { width: 26, height: 26 }, color: 'warning.dark' }}
        color="warning"
      >
        <Badge showZero badgeContent={totalQuantity} color="error">
          <ShoppingCart variant="Bulk" />
        </Badge>
      </IconButton>
    </Fab>
  );
};

export default FloatingCart;
