import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  BUTTON_SECONDARY_BACKGROUND,
  BUTTON_TEXT,
} from '../../../config/colours';

const StyledButtonText = styled.Text`
  background-color: ${BUTTON_SECONDARY_BACKGROUND};
  text-align: center;
  font-size: 22;
  color: ${BUTTON_TEXT};
  margin-left: 40;
  margin-right: 40;
  padding-top: 10;
  padding-bottom: 10;
  margin-vertical: 10;
`;

const SecondaryButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);

SecondaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

SecondaryButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default SecondaryButton;
