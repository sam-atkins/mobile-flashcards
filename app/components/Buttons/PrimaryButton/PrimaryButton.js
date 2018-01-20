import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  BUTTON_PRIMARY_BACKGROUND,
  BUTTON_TEXT,
} from '../../../config/colours';

const StyledButtonText = styled.Text`
  background-color: ${BUTTON_PRIMARY_BACKGROUND};
  text-align: center;
  font-size: 22;
  color: ${BUTTON_TEXT};
  margin-left: 40;
  margin-right: 40;
  height: 45;
  padding-top: 10;
  padding-bottom: 10;
  margin-vertical: 10;
`;

const PrimaryButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

PrimaryButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default PrimaryButton;
