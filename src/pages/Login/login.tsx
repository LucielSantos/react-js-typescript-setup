import React, { useEffect } from 'react';
import { LoginViewProps } from '.';

export const LoginView: React.FC<LoginViewProps> = ({
  handleLogin,
  history,
}) => {
  useEffect(() => {
    handleLogin({ login: 'username', password: 'q1w2e3r4' });
  }, []);

  return (
    <div>
      LoginView
      <button onClick={() => history.goBack()}>Voltar</button>
    </div>
  );
};
