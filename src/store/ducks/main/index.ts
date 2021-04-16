import { Reducer } from 'redux';
import { IMainState } from './types';

const INITIAL_STATE: IMainState = {
  data: 'data',
};

const reducer: Reducer<IMainState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
