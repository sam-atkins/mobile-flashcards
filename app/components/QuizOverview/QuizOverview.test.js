/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import QuizOverview from './QuizOverview';

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

      .create(<QuizOverview navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
