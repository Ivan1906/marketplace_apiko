import {connect} from 'react-redux'
import {compose, withHandlers, withState} from 'recompose';
import {withRouter} from 'react-router-dom';
import {authOperations} from '../../modules/auth';
import RegisterView from './RegisterView';
import { routes } from '../router';

const mapStateToProps = (state) => ({isLoading: state.auth.login.isLoading, errorMessage: state.auth.register.error});

const mapDispatchToProps = {
  register: authOperations.register
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), withState('initialValue', 'ChangeInitialValue', {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
}), withState('disabledBtn', 'changeDisabledBtn', false), withHandlers({
  setInitialValue: ({ChangeInitialValue, initialValue, changeDisabledBtn, disabledBtn}) => (name, value, errors) => {
    ChangeInitialValue(() => ({
      ...initialValue,
      [name]: value
    }));

    let {fullName, password, confirmPassword} = ({
      ...initialValue,
      [name]: value
    });

    if (fullName !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword && !errors.email) {
      changeDisabledBtn(() => disabledBtn = true);
    } else {
      changeDisabledBtn(() => disabledBtn = false);
    }
  },
  handleRegister: ({initialValue, register, history, errorMessage}) => async () => {
    try {
      await register(initialValue);

      if (!errorMessage) {
        history.push(routes.home);
      }
    } catch(e) {}
  }
}));

export default enhance(RegisterView);