import { action } from 'typesafe-actions';
import { Login, LoginTypes } from './types';

export const setLoading = (value: boolean) =>
  action(LoginTypes.SET_LOADING, { value });

export const handleLogin = (loginData: Login) =>
  action(LoginTypes.HANDLE_LOGIN, loginData);
