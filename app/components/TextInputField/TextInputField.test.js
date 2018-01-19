/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import TextInputField from './TextInputField';

describe('TextInputField', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TextInputField
        fieldLabel="label"
        placeholder="placeholder"
        maxLength={40}
        onChangeText={() => { }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
