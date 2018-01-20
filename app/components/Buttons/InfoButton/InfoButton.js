import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  BUTTON_INFO_BACKGROUND,
  BUTTON_INFO_TEXT,
} from '../../../config/colours';

const StyledButtonText = styled.Text`
  background-color: ${BUTTON_INFO_BACKGROUND};
  text-align: center;
  font-size: 22;
  color: ${BUTTON_INFO_TEXT};
  margin-left: 5;
  margin-right: 5;
  padding-top: 10;
  padding-bottom: 10;
  margin-vertical: 10;
`;

const InfoButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);

InfoButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

InfoButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default InfoButton;
