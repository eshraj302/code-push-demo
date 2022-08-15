import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';
import {getStore, getPersistor} from '@redux/index';
import CodePush from 'react-native-code-push';
import {Platform} from 'react-native';
import Config from 'react-native-config';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyledText} from '@components/atoms';

const codePushOptions = {
  deploymentKey: Platform.select({
    android: Config.CODE_PUSH_ANDROID,
    ios: Config.CODE_PUSH_IOS,
  }),
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
};

const App = () => {
  const store = getStore();
  const persistor = getPersistor();

  const onBeforeLift = () => {
    //Do some stuff that when redux has initialized
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<StyledText>Loading...</StyledText>}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default CodePush(codePushOptions)(App);
