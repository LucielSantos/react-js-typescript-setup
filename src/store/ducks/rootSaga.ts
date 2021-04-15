import * as Eff from 'redux-saga/effects'; // <-- new
import { login } from './login/sagas';

import { ELoginTypes } from './login/types';

const takeLatest: any = Eff.takeLatest; // <-- new
const all = Eff.all; // <-- new

export default function* rootSaga(): any {
  return yield all([takeLatest(ELoginTypes.HANDLE_LOGIN, login)]);
}
