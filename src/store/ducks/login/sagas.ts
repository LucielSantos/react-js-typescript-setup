import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { ISagaParam } from '../sagaTypes';
import { setLoading } from './actions';
import { LoginActionTypes, ILogin } from './types';

export function* login(param: ISagaParam<ILogin>) {
  try {
    put(setLoading(true));

    console.log(param.payload);

    put(setLoading(false));
  } catch (error) {
    put(setLoading(false));
  }
}

export function loginRootSaga(): ForkEffect<never>[] {
  return [takeEvery(LoginActionTypes.HANDLE_LOGIN, login)];
}
