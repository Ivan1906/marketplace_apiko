import {createAsyncActions} from '@letapp/redux-actions';

export const login = createAsyncActions('auth/LOGIN');
export const register = createAsyncActions('auth/REGISTER');
export const logout = createAsyncActions('auth/LOGOUT');
export const resetPassword = createAsyncActions('auth/RESET_PASSWORD');
export const updateUser = createAsyncActions('auth/UPDATE_USER');