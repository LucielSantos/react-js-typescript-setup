import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { routePaths } from './routes';
import theme from './styles/theme';

import { globalStye as GlobalStyle } from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={routePaths.MAIN} component={Main} />
          </Switch>

          <GlobalStyle />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
