import React from 'react';
import _ from 'lodash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationService} from './util';
import {store, persistor} from './util/Store';
import AppContainer from './containers/Router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer
            forwardRef={
              navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef) // navigating-without-navigation-prop. ex: tap from notification
            }
          />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
