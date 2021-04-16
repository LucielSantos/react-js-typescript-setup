import { action } from 'typesafe-actions';
import { ILogin, LoginActionTypes } from './types';

export const setLoading = (value: boolean) =>
  action(LoginActionTypes.SET_LOADING, { value });

export const handleLogin = (loginData: ILogin) =>
  action(LoginActionTypes.HANDLE_LOGIN, loginData);
