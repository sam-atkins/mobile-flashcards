/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeConfig from '../../store/storeConfig';
import NewDeckForm from './NewDeckForm';

describe('NewDeckForm', () => {
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
        <NewDeckForm content={[]} navigation={navigation} />
              </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
