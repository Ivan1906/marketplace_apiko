import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose';
import {withRouter} from 'react-router-dom';
import {authOperations} from '../../modules/auth';
import ResetPasswordView from './ResetPasswordView';
import {routes} from '../router';

const mapStateToProps = (state) => ({isLoading: state.auth.resetPassword.isLoading, error: state.auth.resetPassword.error});

const mapDispatchToProps = {
  resetPassword: authOperations.resetPassword
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withState('initialValue', 'ChangeInitialValue', {email: ''}), withState('disabledBtn', 'changeDisabledBtn', false), withHandlers({
  setInitialValue: ({ChangeInitialValue, initialValue, changeDisabledBtn, disabledBtn}) => (name, value, errors) => {
    ChangeInitialValue(() => ({
      ...initialValue,
      [name]: value
    }));

    if (!errors.email) {
      changeDisabledBtn(() => disabledBtn = true);
    } else {
      changeDisabledBtn(() => disabledBtn = false);
    }
  },
  handleRestorePassword: ({history, resetPassword, initialValue, error}) => async() => {

    try {
      await resetPassword(initialValue);

      if (!error) {
        history.push(routes.login);
      }
    } catch(e) {}
  }
}));

export default enhance(ResetPasswordView);