// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, CardMedia, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// third-party
import { motion } from 'framer-motion';

// project-imports
import useConfig from 'hooks/useConfig';

// assets
import { Send } from 'iconsax-react';

import imgfooterlogo from 'assets/images/landing/codedthemes-logo.svg';
import imgfootersoc1 from 'assets/images/landing/img-soc1.svg';
import imgfootersoc2 from 'assets/images/landing/img-soc2.svg';
import imgfootersoc3 from 'assets/images/landing/img-soc3.svg';
import AnimateButton from 'components/@extended/AnimateButton';

const dashImage = require.context('assets/images/landing', true);

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

const FooterBlock = ({ isFull }: showProps) => {
  const theme = useTheme();
  const { presetColor } = useConfig();
  const textColor = theme.palette.mode === 'dark' ? 'text.primary' : 'background.paper';

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  const frameworks = [
    { title: 'CodeIgniter', link: '#able-pro' },
    {
      title: 'React MUI',
      link: '#able-pro'
    },
    {
      title: 'Angular',
      link: '#able-pro'
    },
    {
      title: 'Bootstrap 5',
      link: '#able-pro'
    },
    {
      title: '.Net',
      link: '#able-pro'
    }
  ];

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: theme.palette.secondary.dark,
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 18.75 },
            pb: { xs: 2.5, md: 10 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '80%',
              bottom: 0,
              left: 0,
              background: `linear-gradient(180deg, transparent 0%, ${theme.palette.secondary.dark} 70%)`
            }
          }}
        >
          <CardMedia
            component="img"
            image={dashImage(`./img-footer-${presetColor}.png`)}
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '55%',
              maxWidth: 700,
              position: 'absolute',
              top: '-28%',
              right: 0,
              ...(theme.direction === 'rtl' && {
                transform: 'scaleX(-1)',
                float: 'none'
              })
            }}
          />
          <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
              <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={2} sx={{ [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' } }}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.common.white }}>
                      Roadmap
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 550 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 30
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: theme.palette.common.white,
                          fontWeight: 700
                        }}
                      >
                        Upcoming Release
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white }}>
                      What is next? Checkout the Upcoming release of Able Pro Material React.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ my: 2 }}>
                    <Box sx={{ display: 'inline-block' }}>
                      <AnimateButton>
                        <Button
                          size="large"
                          variant="contained"
                          endIcon={<Send size={20} />}
                          component={Link}
                          href="https://codedthemes.gitbook.io/able-pro-react/roadmap"
                          target="_blank"
                        >
                          Roadmap
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Box sx={{ pt: isFull ? 0 : 10, pb: 10, bgcolor: theme.palette.secondary.dark }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CardMedia component="img" image={imgfooterlogo} sx={{ width: 'auto' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, color: theme.palette.common.white }}>
                      Since 2013, More than 5K+ Developers trust the Phoenixcoded Digital Product. Able Pro Material React is Manage under
                      their Experienced Team Players.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
                      Help
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="#able-pro" target="_blank" underline="none">
                        Blog
                      </FooterLink>
                      <FooterLink href="https://codedthemes.gitbook.io/able-pro-react/" target="_blank" underline="none">
                        Documentation
                      </FooterLink>
                      <FooterLink href="https://codedthemes.gitbook.io/able-pro-react/changelog" target="_blank" underline="none">
                        Change Log
                      </FooterLink>
                      <FooterLink href="https://phoenixcoded.authordesk.app/" target="_blank" underline="none">
                        Support
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
                      Store Help
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="https://mui.com/store/license/" target="_blank" underline="none">
                        License
                      </FooterLink>
                      <FooterLink href="https://mui.com/store/customer-refund-policy/" target="_blank" underline="none">
                        Refund Policy
                      </FooterLink>
                      <FooterLink
                        href="https://support.mui.com/hc/en-us/sections/360002564979-For-customers"
                        target="_blank"
                        underline="none"
                      >
                        Submit a Request
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
                      Able Pro Material Eco-System
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      {frameworks.map((item, index) => (
                        <FooterLink href={item.link} target="_blank" underline="none" key={index}>
                          {item.title}
                          {/* {item.isUpcoming && <Chip variant="outlined" size="small" label="Upcoming" sx={{ ml: 0.5 }} />} */}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography variant="h5" color={textColor} sx={{ fontWeight: 500 }}>
                      More Products
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink
                        href="https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403"
                        target="_blank"
                        underline="none"
                      >
                        Able Pro React Material
                      </FooterLink>
                      <FooterLink
                        href="https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403"
                        target="_blank"
                        underline="none"
                      >
                        Free Able Pro React
                      </FooterLink>
                      <FooterLink
                        href="https://themeforest.net/item/able-pro-responsive-bootstrap-4-admin-template/19300403"
                        target="_blank"
                        underline="none"
                      >
                        Free Material React
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ borderColor: 'secondary.dark' }} />
      <Box
        sx={{
          py: 1.5,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.lighter : theme.palette.secondary[800]
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle2" color="secondary">
                © Made with love by Team Phoenixcoded
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc1} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc2} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc3} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterBlock;
