/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import AppStatusBar from './AppStatusBar';

describe('AppStatusBar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AppStatusBar backgroundColor="#292477" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
