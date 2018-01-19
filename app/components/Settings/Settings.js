import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Settings = props => (
  <View>
    <Text>Settings screen</Text>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Notifications')}
    >
      <Text>Notifications</Text>
    </TouchableOpacity>
  </View>
);

export default Settings;
