/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeText from './WelcomeText';

describe('WelcomeText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WelcomeText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
