import Login from '../pages/Login';
import { IPrivateRoute, IPublicRoute } from './components';

export const routePaths = {
  MAIN: '/',
  LOGIN: '/login',
};

export const publicRoutes: IPublicRoute[] = [
  {
    path: routePaths.LOGIN,
    component: Login,
  },
];

export const privateRoutes: IPrivateRoute[] = [];
