import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import Main from './pages/Main';
import { routePaths } from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routePaths.MAIN} component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
