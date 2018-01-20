/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import InfoButton from './InfoButton';

describe('InfoButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InfoButton onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
