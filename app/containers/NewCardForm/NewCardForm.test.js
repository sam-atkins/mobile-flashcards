/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeConfig from '../../store/storeConfig';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
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
        <NewCardForm submitCard={() => {}} navigation={navigation} />
              </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
