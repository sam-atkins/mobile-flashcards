/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import ButtonWrapper from './ButtonWrapper';

describe('ButtonWrapper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
