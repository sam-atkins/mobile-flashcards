import React from 'react';
import { View } from 'react-native';
import { MainNavigator } from './app/config/routes';
import AppStatusBar from './app/components/AppStatusBar';
import { APP_STATUSBAR_BACKGROUND } from './app/config/colours';

const App = () => (
  <View style={{ flex: 1 }}>
    <AppStatusBar
      backgroundColor={APP_STATUSBAR_BACKGROUND}
      barStyle="light-content"
    />
    <MainNavigator />
  </View>
);

export default App;
