import * as React from 'react';
import 'react-native-gesture-handler';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import { store, persistor } from '~/store';

import App from '~/App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
