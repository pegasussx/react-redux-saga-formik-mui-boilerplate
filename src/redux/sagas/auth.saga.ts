// import node_modules
import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, authRequestFailure, getMeSuccess, logout } from 'redux/slices/auth.slice';
import { loginApi, getCurrentUserApi } from 'apis/auth';

interface SignInResultType {
  success: boolean;
  data: any;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function* signInSaga(action: any) {
  try {
    const result: SignInResultType = yield call(loginApi, action.payload.data);

    if (result.success) {
      yield put(signInSuccess(result.data));

      toast.success(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Welcome, ${result.data.data.user.firstName} ${result.data.data.user.lastName}`,
      );

      action.payload.success();
      return;
    }

    toast.error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${result.data.message}`,
    );

    yield put(authRequestFailure({ error: result.data.message }));
  } catch (error: any) {
    toast.error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${error.response.data.message}`,
    );

    yield put(authRequestFailure({ error: error.response.data.message }));
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function* getCurrentUserSaga() {
  try {
    const result: SignInResultType = yield call(getCurrentUserApi);

    if (result.success) {
      yield put(getMeSuccess(result.data));

      return;
    }

    yield put(authRequestFailure({ error: result.data.message }));
  } catch (error: any) {
    yield put(authRequestFailure({ error: error.response.data.message }));
  }
}

export function* logoutSaga() {
  try {
    yield put(logout());
  } catch (error: any) {
    yield put(authRequestFailure({ error: error.response.data.message }));
  }
}
