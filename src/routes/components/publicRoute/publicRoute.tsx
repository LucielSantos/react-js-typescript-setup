import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface IPublicRoute {
  exact?: RouteProps['exact'];
  component: RouteProps['component'];
  path: RouteProps['path'];
}

export const PublicRoute: React.FC<IPublicRoute> = props => (
  <Route {...props} />
);
