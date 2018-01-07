// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigator } from './app/config/routes';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>App.js !</Text>
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
