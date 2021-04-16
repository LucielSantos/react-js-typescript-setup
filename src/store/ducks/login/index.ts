import { Reducer } from 'redux';
import { ILoginState, LoginActionTypes } from './types';

const INITIAL_STATE: ILoginState = {
  data: {
    login: '',
    password: '',
  },
  loading: false,
};

const reducer: Reducer<ILoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
