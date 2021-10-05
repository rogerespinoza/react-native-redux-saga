import { call, put } from 'redux-saga/effects';
import { usersTypes } from '../root-actions';

export function* tryGetUserData() {
  try {
    const URL = 'http://jsonplaceholder.typicode.com/users';
    const response = yield call(fetch, URL);
    const users = yield call([response, 'json']);
    // console.log(users);
    yield put({type: usersTypes.USERS_SUCCESS, payload: users});
  } catch (e) {
    console.log(e);
    yield put({type: usersTypes.USERS_FAILED});
  }
}