import { useRoutes } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTES RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes, ComponentsRoutes, MainRoutes]);
}
