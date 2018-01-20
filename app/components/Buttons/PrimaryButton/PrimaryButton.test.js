/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrimaryButton onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
