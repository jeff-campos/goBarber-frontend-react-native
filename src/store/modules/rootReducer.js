import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
});

/**
 * Nesse arquivo, importamos todos os reducers de todos os modulos da aplicação que criamos e
 * através do metodo  combineReducers do Redux, juntamos todos eles e exportamos no final. Esse export será usado para
 * criar a Store.
 */
