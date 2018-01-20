import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInputWrapper = styled.View`
  padding-horizontal: 15;
`;

const FieldLabelText = styled.Text`
  font-size: 16;
  padding-top: 10;
`;

const TextInputField = ({
  fieldLabel,
  maxLength,
  placeholder,
  onChangeText,
}) => (
  <TextInputWrapper>
    <FieldLabelText>{fieldLabel}</FieldLabelText>
    <TextInput
      style={{ height: 40 }}
      placeholder={placeholder}
      maxLength={maxLength}
      blurOnSubmit
      keyboardType="default"
      onChangeText={onChangeText}
    />
  </TextInputWrapper>
);

TextInputField.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInputField;
