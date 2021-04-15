import { action } from 'typesafe-actions';
import { ILogin, ELoginTypes } from './types';

export const setLoading = (value: boolean) =>
  action(ELoginTypes.SET_LOADING, { value });

export const handleLogin = (loginData: ILogin) =>
  action(ELoginTypes.HANDLE_LOGIN, loginData);
