import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../../store';
import { IMainState } from '../../store/ducks/main/types';
import { MainView } from './main';

interface IStateProps extends IMainState {}

interface IDispatchProps {}

interface IOwnProps extends RouteComponentProps {}

export type MainViewProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({ main }: IApplicationState) => ({
  ...main,
});

export default connect(mapStateToProps)(MainView);
