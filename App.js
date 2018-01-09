import React from 'react';
import { View } from 'react-native';
import { MainNavigator } from './app/config/routes';
import AppStatusBar from './app/components/AppStatusBar';

const App = () => (
  <View style={{ flex: 1 }}>
    <AppStatusBar backgroundColor="#292477" barStyle="light-content" />
    <MainNavigator />
  </View>
);

export default App;
