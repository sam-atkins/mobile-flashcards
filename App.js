// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MainNavigator } from './app/config/routes';
import AppStatusBar from './app/components/AppStatusBar';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor="#292477" barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
