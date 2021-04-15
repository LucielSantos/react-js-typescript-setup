import { Reducer } from 'redux';
import { LoginState, LoginTypes } from './types';

const INITIAL_STATE: LoginState = {
  data: {
    login: '',
    password: '',
  },
  loading: false,
};

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
