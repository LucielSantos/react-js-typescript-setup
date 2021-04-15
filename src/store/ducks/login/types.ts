// Action types
export enum LoginTypes {
  SET_LOADING = '@login/SET_LOADING',
  HANDLE_LOGIN = '@login/HANDLE_LOGIN',
}

// Data types
export interface Login {
  login: string;
  password: string;
}

// State type
export interface LoginState {
  readonly data: Login;
  readonly loading: boolean;
}
