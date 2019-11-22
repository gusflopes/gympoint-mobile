import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { studentId } = payload;

    const { status } = yield call(api.get, `students/${studentId}/checkins`);

    if (status !== 200) {
      Alert.alert('ID Incorreto 01!', 'Verifique seus dados');

      return;
    }

    yield put(signInSuccess(studentId));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('ID Incorreto 02!', 'Verifique seus dados');
    // yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@student/SIGN_IN_REQUEST', signIn),
  takeLatest('@student/SIGN_OUT', signOut),
]);
