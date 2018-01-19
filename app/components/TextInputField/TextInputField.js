import React from 'react';
import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const TextInputField = ({
  fieldLabel,
  maxLength,
  placeholder,
  onChangeText,
}) => (
  <View>
    <Text>{fieldLabel}</Text>
    <TextInput
      style={{ height: 40 }}
      placeholder={placeholder}
      maxLength={maxLength}
      blurOnSubmit
      keyboardType="default"
      onChangeText={onChangeText}
    />
  </View>
);

TextInputField.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInputField;
