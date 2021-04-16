import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IApplicationState } from '../../store';
import { LoginView } from './login';

import * as LoginActions from '../../store/ducks/login/actions';
import { ILogin, ILoginState } from '../../store/ducks/login/types';
import { RouteComponentProps } from 'react-router';

interface IStateProps {
  login: ILoginState;
}

interface IDispatchProps {
  setLoading(value: boolean): void;
  handleLogin(loginData: ILogin): void;
}

interface IOwnProps extends RouteComponentProps {}

export type LoginViewProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ login }: IApplicationState) => ({
  login,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
