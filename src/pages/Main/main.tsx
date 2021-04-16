import React from 'react';
import { MainViewProps } from '.';
import { routePaths } from '../../routes';

import { Router } from '../../routes/components';

import { Header } from './styles';

export const MainView: React.FC<MainViewProps> = ({ data, history }) => {
  return (
    <div>
      <Header>Main header</Header>
      Main View
      <button onClick={() => history.push(routePaths.LOGIN)}>
        Navigate to login
      </button>
      <Router />
    </div>
  );
};
