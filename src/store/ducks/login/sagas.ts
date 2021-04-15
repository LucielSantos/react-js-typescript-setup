import { call, put } from 'redux-saga/effects';
import { ISagaParam } from '../sagaTypes';
import { setLoading } from './actions';
import { Login } from './types';

export function* login(param: ISagaParam<Login>) {
  try {
    put(setLoading(true));

    console.log(param.payload);

    put(setLoading(false));
  } catch (error) {
    put(setLoading(false));
  }
}
