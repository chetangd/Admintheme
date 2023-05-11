// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// project-imports
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import Breadcrumb from 'components/@extended/Breadcrumbs';
import navigation from 'menu-items';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import { Minus } from 'iconsax-react';

// ==============================|| COMPONENTS - BREADCRUMBS ||============================== //

const ComponentBreadcrumb = () => {
  const theme = useTheme();

  const basicBreadcrumbsCodeString = `<Breadcrumb
  navigation={navigation}
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const separatorBreadcrumbsCodeString = `<Breadcrumb
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const titleBreadcrumbsCodeString = `<Breadcrumb
  title
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const bottomBreadcrumbsCodeString = `<Breadcrumb
  title
  titleBottom
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const iconsBreadcrumbsCodeString = `<Breadcrumb
  title
  icons
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const dashboardBreadcrumbsCodeString = `<Breadcrumb
  title
  icon
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const collapsedBreadcrumbsCodeString = `<Breadcrumb
  title
  maxItems={2}
  navigation={navigation}
  
  sx={{
    mb: '0px !important',
    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
  }}
/>`;

  const noCardBreadcrumbsCodeString = `<Breadcrumb title navigation={navigation}  card={false} sx={{ mb: '0px !important' }} />`;

  const noDividerBreadcrumbsCodeString = `<Breadcrumb
  title
  navigation={navigation}
  
  card={false}
  divider={false}
  sx={{ mb: '0px !important' }}
/>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Breadcrumbs"
        caption="Breadcrumbs allow users to make selections from a range of values."
        directory="src/pages/components-overview/breadcrumbs"
        link="https://mui.com/material-ui/react-breadcrumbs/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic" codeHighlight codeString={basicBreadcrumbsCodeString}>
              <Breadcrumb
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Custom Separator" codeString={separatorBreadcrumbsCodeString}>
              <Breadcrumb
                navigation={navigation}
                separator={Minus}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="With Title" codeString={titleBreadcrumbsCodeString}>
              <Breadcrumb
                title
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Title Bottom" codeString={bottomBreadcrumbsCodeString}>
              <Breadcrumb
                title
                titleBottom
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="With Icons" codeString={iconsBreadcrumbsCodeString}>
              <Breadcrumb
                title
                icons
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Only Dashboard Icons" codeString={dashboardBreadcrumbsCodeString}>
              <Breadcrumb
                title
                icon
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="Collapsed Breadcrumbs" codeString={collapsedBreadcrumbsCodeString}>
              <Breadcrumb
                title
                maxItems={2}
                navigation={navigation}
                sx={{
                  mb: '0px !important',
                  bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'secondary.lighter'
                }}
              />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="No Card with Divider" codeString={noCardBreadcrumbsCodeString}>
              <Breadcrumb title navigation={navigation} card={false} sx={{ mb: '0px !important' }} />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard title="No Card & No Divider" codeString={noDividerBreadcrumbsCodeString}>
              <Breadcrumb title navigation={navigation} card={false} divider={false} sx={{ mb: '0px !important' }} />
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
};

export default ComponentBreadcrumb;
