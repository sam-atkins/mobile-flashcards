import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import InfoButton from '../Buttons/InfoButton';

const StyledHeaderText = styled.Text`
  font-size: 24;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const Settings = props => (
  <View>
    <StyledHeaderText>Settings screen</StyledHeaderText>
    <InfoButton
      text="Notifications"
      onPress={() => props.navigation.navigate('Notifications')}
    />
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Settings;
