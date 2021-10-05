import { takeEvery, all } from 'redux-saga/effects';
import { tryGetUserData } from './users/sagas/';
import * as actions from './root-actions';

// notes 
// note: takeEvery is for handling simultanous actions
// note: takeLatest is for handling single actions

export default function* rootSaga() {
  yield all([
    takeEvery( actions.usersTypes.USERS_TRY, tryGetUserData )
  ]);
  // yield takeEvery('*', function*() {
  //   // do nothing
  // })
}