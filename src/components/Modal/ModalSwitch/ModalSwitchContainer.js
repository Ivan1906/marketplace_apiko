import {connect} from 'react-redux'
import {compose, lifecycle, withState} from 'recompose';
import {withRouter} from 'react-router-dom';
import ModalSwitchView from './ModalSwitchView';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading});

const enhance = compose(withRouter, connect(mapStateToProps, undefined), withState('previousLocation', 'setPrevLocation', ({location}) => location), lifecycle({
  componentWillUpdate(nextProps) {
    console.log('componentWillUpdate', this.props)
    let {location} = this.props;

    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }
}));

export default enhance(ModalSwitchView);