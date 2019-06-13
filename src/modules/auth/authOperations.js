import * as actions from './authActions';
import Api from './../../api';

export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api
        .Auth
        .login(body);
      const {user, token} = res.data;
      Api
        .Auth
        .setToken(token);

      dispatch(actions.login.success(user));
    } catch (error) {
      console.error(error);
      dispatch(actions.login.error({message: error.message}));
      throw error;
    }
  }
};

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api
        .Auth
        .register(body);
      const {user, token} = res.data;
      Api
        .Auth
        .setToken(token);

      dispatch(actions.register.success(user));
    } catch (error) {
      console.error(error);
      dispatch(actions.register.error({message: error.message}));
      throw error;
    }
  }
}

export function logout() {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.logout.start());

      await Api
        .Auth
        .logout();

      dispatch(actions.register.success());
    } catch (error) {
      console.error(error);
      dispatch(actions.register.error({message: error.message}));
    }
  }
};

export function resetPassword() {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.resetPassword.start());

      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1500);
      })

      dispatch(actions.resetPassword.success());
    } catch (error) {
      console.error(error);
      dispatch(actions.resetPassword.error({message: error.message}));
      throw error;
    }
  }
};
