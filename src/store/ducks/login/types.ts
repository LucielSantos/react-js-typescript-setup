// Action types
export const ELoginTypes = {
  SET_LOADING: '@login/SET_LOADING',
  HANDLE_LOGIN: '@login/HANDLE_LOGIN',
};

// Data types
export interface ILogin {
  login: string;
  password: string;
}

// State type
export interface ILoginState {
  readonly data: ILogin;
  readonly loading: boolean;
}
