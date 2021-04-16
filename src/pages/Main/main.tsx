import React from 'react';
import { MainViewProps } from '.';
import { routePaths } from '../../routes';

import { Router } from '../../routes/components';

export const MainView: React.FC<MainViewProps> = ({ data, history }) => {
  return (
    <div>
      Main View
      <button onClick={() => history.push(routePaths.LOGIN)}>
        Navigate to login
      </button>
      <Router />
    </div>
  );
};
