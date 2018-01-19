/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './Settings';

describe('Settings', () => {
  it('renders correctly', () => {
    const navigation = {
      navigate: 'Notifications',
    };
    const tree = renderer.create(<Settings navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
