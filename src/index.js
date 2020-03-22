import * as React from 'react';
import 'react-native-gesture-handler';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import { store, persistor } from '~/store';

import Routes from '~/routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
