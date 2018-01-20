/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeConfig from '../../store/storeConfig';
import HomeView from './HomeView';

describe('HomeView', () => {
  it('renders correctly', () => {
    const navigation = {
      state: {
        params: {
          title: 'React',
          questions: 2,
        },
      },
    };
    const tree = renderer
      .create(<Provider store={storeConfig}>
        <HomeView content={[]} navigation={navigation} />
              </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
