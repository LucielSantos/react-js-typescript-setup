import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
