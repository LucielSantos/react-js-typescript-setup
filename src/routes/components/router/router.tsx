import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../';
import { privateRoutes, publicRoutes } from '../..';

export const Router: React.FC = () => {
  // TODO: implements 404 feedback

  // TODO: implements best loading message
  return (
    <Suspense fallback={() => 'Loading...'}>
      <Switch>
        {publicRoutes.map((props, index) => (
          <PublicRoute {...props} key={index} />
        ))}

        {privateRoutes.map((props, index) => (
          <PrivateRoute {...props} key={index} />
        ))}
      </Switch>
    </Suspense>
  );
};
