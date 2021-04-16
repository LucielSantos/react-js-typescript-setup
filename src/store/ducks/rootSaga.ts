import * as Eff from 'redux-saga/effects';
import { ForkEffect } from 'redux-saga/effects';
import { loginRootSaga } from './login/sagas';
import { mainRootSaga } from './main/sagas';

const all = Eff.all; // <-- new

export function* combineRootSagas(): Generator<ForkEffect<never>[]> {
  const sagas = [...mainRootSaga(), ...loginRootSaga()];
  return sagas;
}

export default function* rootSaga(): any {
  const sagas = combineRootSagas();
  return yield all(yield sagas);
}
