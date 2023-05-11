// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import { useSelector } from 'store';

// type
import { NavItemType } from 'types/menu';
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';

const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  components: Box1
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

export const DashboardMenu = () => {
  const { menuDashboard } = useSelector((state) => state.menu);

  const SubChildrenLis = (SubChildrenLis: NavItemType[]) => {
    return SubChildrenLis?.map((subList: NavItemType) => {
      return {
        ...subList,
        title: <FormattedMessage id={`${subList.title}`} />,
        // @ts-ignore
        icon: icons[subList.icon]
      };
    });
  };

  const menuList = (subList: NavItemType) => {
    let list: NavItemType = {
      ...subList,
      title: <FormattedMessage id={`${subList.title}`} />,
      // @ts-ignore
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse') {
      list.children = SubChildrenLis(subList.children!);
    }
    return list;
  };
  const ChildrenList: NavItemType[] | undefined = menuDashboard?.children?.map((subList: NavItemType) => {
    return menuList(subList);
  });

  const dashboardList: NavItemType = {
    ...menuDashboard,
    title: <FormattedMessage id={`${menuDashboard.title}`} />,
    // @ts-ignore
    icon: icons[menuDashboard.icon],
    children: ChildrenList
  };

  return dashboardList;
};
