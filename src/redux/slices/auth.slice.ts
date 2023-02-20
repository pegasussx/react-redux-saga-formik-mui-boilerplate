import { createSlice, type PayloadAction, createAction } from '@reduxjs/toolkit';
import { LOGIN_REQUEST, GET_CURRENT_USER_REQUEST, LOGOUT_REQUEST } from 'redux/types';

interface ErrorType {
  message: string;
}

interface InitialStateType {
  token: any;
  me: any;
  error: ErrorType;
}

const initialState: InitialStateType = {
  token: null,
  me: null,
  error: { message: '' },
};

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

/**
 * Crate actions
 */
export const loginAction = createAction(LOGIN_REQUEST, withPayloadType<any>());
export const getCurrentUserAction = createAction(GET_CURRENT_USER_REQUEST);
export const logoutAction = createAction(LOGOUT_REQUEST);

const AuthSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    /**
     * SignIn
     */
    signInSuccess(state: InitialStateType, action: PayloadAction<{ data: any }>) {
      state.token = action.payload.data.accessToken;
      state.me = action.payload.data.user;

      window.localStorage.setItem('token', state.token);
      window.localStorage.setItem('refresh-token', action.payload.data.refreshToken);
    },

    authRequestFailure(state: InitialStateType, action: PayloadAction<{ error: string }>) {
      state.error.message = action.payload.error;
    },

    getMeSuccess(state: InitialStateType, action: PayloadAction<{ data: any }>) {
      state.me = action.payload.data;
    },

    logout(state: InitialStateType) {
      state = initialState;

      localStorage.removeItem('token');
      localStorage.removeItem('refresh-token');

      window.location.href = '/home';
    },
  },
});

export const { signInSuccess, authRequestFailure, getMeSuccess, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
