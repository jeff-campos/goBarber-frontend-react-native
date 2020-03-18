import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user]);
}

/**
 * A exemplo do rootReducer, vamos ter que combinar/juntas todos os nossos sagas. Para isso, criamos uma função
 * generator chamada rootSaga. O retorno dessa função são todos os sagas dentro do metodo all do redux-saga/effects'
 */
