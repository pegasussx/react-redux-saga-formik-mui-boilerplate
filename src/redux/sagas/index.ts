// node_modules
import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, GET_CURRENT_USER_REQUEST, LOGOUT_REQUEST } from 'redux/types';

// sagas
import { signInSaga, getCurrentUserSaga, logoutSaga } from '../sagas/auth.saga';

// sagas
function* rootSaga() {
  yield all([takeLatest(LOGIN_REQUEST, signInSaga)]);
  yield all([takeLatest(LOGOUT_REQUEST, logoutSaga)]);
  yield all([takeLatest(GET_CURRENT_USER_REQUEST, getCurrentUserSaga)]);
}

export default rootSaga;
