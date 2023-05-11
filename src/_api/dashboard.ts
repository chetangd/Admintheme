// project-imports
import services from 'utils/mockAdapter';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - DASHBOARD  ||============================== //

const dashboard: NavItemType = {
  id: 'group-dashboard',
  title: 'navigation',
  type: 'group',
  icon: 'navigation',
  children: [
    {
      id: 'dashboard',
      title: 'dashboard',
      type: 'collapse',
      icon: 'dashboard',
      children: [
        {
          id: 'default',
          title: 'default',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics',
          title: 'analytics',
          type: 'item',
          url: '/dashboard/analytics'
        }
      ]
    },
    {
      id: 'components',
      title: 'components',
      type: 'item',
      url: '/components-overview/buttons',
      icon: 'components',
      target: true,
      chip: {
        label: 'New',
        color: 'primary',
        size: 'small'
      }
    }
  ]
};

// ==============================|| DASHBOARD - GET ||============================== //

services.onGet('/api/dashboard').reply(200, { dashboard: dashboard });
