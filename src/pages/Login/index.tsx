import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';
import { LoginView } from './login';

import * as LoginActions from '../../store/ducks/login/actions';
import { Login, LoginState } from '../../store/ducks/login/types';

interface StateProps {
  login: LoginState;
}

interface DispatchProps {
  setLoading(value: boolean): void;
  handleLogin(loginData: Login): void;
}

interface OwnProps {}

export type LoginViewProps = StateProps & DispatchProps & OwnProps;

const mapStateToProps = ({ login }: ApplicationState) => ({
  login,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
