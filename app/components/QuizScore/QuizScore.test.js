/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import QuizScore from './QuizScore';
import storeConfig from '../../store/storeConfig';

describe('QuizScore', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={storeConfig}>
        <QuizScore
          totalQuizQuestions={2}
          userCorrectScore={1}
          userIncorrectScore={1}
          userResetQuiz={() => {}}
        />
              </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
