/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AnswerText from './AnswerText';
import storeConfig from '../../store/storeConfig';

describe('AnswerText', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={storeConfig}>
        <AnswerText
          answer="answer"
          currentQuestion={1}
          totalQuizQuestions={2}
          userCorrectAnswer={() => {}}
          userIncorrectAnswer={() => {}}
          correctAndRenderQuizScore={() => {}}
          incorrectAndRenderQuizScore={() => {}}
        />
      </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
