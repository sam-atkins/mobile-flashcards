/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import QuizOverview from './QuizOverview';
import storeConfig from '../../store/storeConfig';

describe('QuizOverview', () => {
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
        <QuizOverview navigation={navigation} />
              </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
