import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

AppStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default AppStatusBar;
