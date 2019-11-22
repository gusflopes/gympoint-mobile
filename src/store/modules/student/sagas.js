import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { studentId } = payload;

    const response = yield call(api.get, `students/${studentId}/checkins`);

    const { student } = response.data;

    if (!student) {
      Alert.alert('ID Incorreto!', 'Verifique seus dados');

      return;
    }

    yield put(signInSuccess(studentId));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('ID Incorreto!', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@student/SIGN_IN_REQUEST', signIn),
  takeLatest('@student/SIGN_OUT', signOut),
]);
