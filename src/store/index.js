import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

/**
 * Essa é a configuração da nossa Store, fazemos os imports dos rootReducer e rootSagas, dentro dos nossos modulos.
 * A primeira coisa que a notamos, é uma variavel sagaMonitor, ela armazena a criação o não de um monitor do Saga pelo Reactroton,
 * na verdade, verifica o ambiente onde a aplicacão está sendo executada, se for desenvolvimerto ela armazena console.tron.createSagaMonitor(), caso não, null.
 * A segunda variavel é sagaMiddleware, chama o metodo createSagaMiddleware passando a variavel acima, sagaMonitor.
 * A terceira variavel coloca num array o valor armazenado na variavel sagaMiddleware.
 * A variavel store usa o metodo createStore, passando 2 parametros, o persistReducer e o middleware.
 * No final, usamos o RUN do sagaMiddleware passando rootSaga. Depois, exporta tudo.
 *
 *
 * Não é muito o desenvolver aqui,é legal pegar um tutorial e entender melhor essa conficuração, mas de modo geral, é assim
 * que se configura a Store, com os sagas e o Reactotron.
 */
