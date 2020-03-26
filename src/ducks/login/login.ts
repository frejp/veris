import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { RootState } from '../RootReducer';
import { fetchMockLogin, LoginFailedObjectType, LoginSuccessObjectType } from '../../mockFetchData';

export interface SystemState {
  isLoggedIn: boolean;
  sessionId: string;
  userName: string;
  loginFailedMessage: string;
}

interface LoginSuccess {
  type: typeof loginSuccess;
  payload: LoginFailedPayLoad;
}

interface LoginFailed {
  type: typeof loginFailed;
  payload: LoginFailedPayLoad;
}

type LoginSuccessPayLoad = {
  isLoggedIn: boolean;
  token: string;
  userName: string;
};

type LoginFailedPayLoad = {
  errorDescription: string;
};

export const loginSuccess = createAction('LOGIN_SUCCESS', function prepare(loginSuccessPayload: LoginSuccessPayLoad) {
  return {
    payload: loginSuccessPayload,
  };
});

export const loginFailed = createAction('LOGIN_FAILED', function prepare(loginFailedPayload: LoginFailedPayLoad) {
  return {
    payload: loginFailedPayload,
  };
});

const initialState: SystemState = {
  isLoggedIn: false,
  sessionId: '',
  userName: '',
  loginFailedMessage: '',
};

export const systemReducer = createReducer(initialState, {
  LOGIN_SUCCESS: (state, action: LoginSuccess) => ({
    ...state,
    ...action.payload,
  }),
  LOGIN_FAILED: (state, action: LoginFailed) => ({
    ...state,
    loggedIn: false,
    loginFailedMessage: action.payload.errorDescription,
  }),
});

export const login = (
  userName: string,
  password: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    const fetchResponse = (await fetchMockLogin(userName, password)) as LoginSuccessObjectType & LoginFailedObjectType;
    if (!fetchResponse.error) {
      dispatch(
        loginSuccess({
          isLoggedIn: true,
          token: fetchResponse.data.token,
          userName: fetchResponse.data.username,
        }),
      );
    } else {
      dispatch(
        loginFailed({
          errorDescription: fetchResponse.errorDescription,
        }),
      );
    }
  } catch (error) {
    dispatch(
      loginFailed({
        errorDescription: error,
      }),
    );
  }
};
