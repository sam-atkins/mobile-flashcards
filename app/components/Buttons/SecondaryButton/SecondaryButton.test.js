/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import SecondaryButton from './SecondaryButton';

describe('SecondaryButton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SecondaryButton onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
