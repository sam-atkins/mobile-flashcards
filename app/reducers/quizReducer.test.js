/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import quiz from './quizReducer';
import { TOGGLE_ANSWER } from '../actions/quizActions';

const initialState = {
  quizDisplay: {
    toggleAnswer: false,
    toggleQuestion: true,
    toggleScore: false,
  },
  quizNumbers: {
    questionNumber: 0,
    quizScore: 0,
  },
};

describe('quiz reducer', () => {
  it('should return initial state', () => {
    const action = {};
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
        toggleScore: false,
      },
      quizNumbers: {
        questionNumber: 0,
        quizScore: 0,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should toggle Answer to true', () => {
    const action = {
      type: TOGGLE_ANSWER,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: true,
        toggleQuestion: false,
        toggleScore: false,
      },
      quizNumbers: {
        questionNumber: 0,
        quizScore: 0,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });
});
