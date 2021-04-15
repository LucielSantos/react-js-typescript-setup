import * as Eff from 'redux-saga/effects'; // <-- new
import { ForkEffect } from 'redux-saga/effects';
import { loginRootSaga } from './login/sagas';

const all = Eff.all; // <-- new

export function* combineRootSagas(): Generator<ForkEffect<never>[]> {
  const sagas = [...loginRootSaga()];
  return sagas;
}

export default function* rootSaga(): any {
  const sagas = combineRootSagas();
  return yield all(yield sagas);
}
