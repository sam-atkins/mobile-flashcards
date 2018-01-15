/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import quiz from './quizReducer';
import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  TOGGLE_ANSWER,
} from '../actions/quizActions';

const initialState = {
  quizDisplay: {
    toggleAnswer: false,
    toggleQuestion: true,
    toggleScore: false,
  },
  quizNumbers: {
    questionNumber: 2,
    quizScore: 2,
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
        questionNumber: 2,
        quizScore: 2,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should toggleAnswer to true', () => {
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
        questionNumber: 2,
        quizScore: 2,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should increment score and question, and toggleQuestion to true', () => {
    const action = {
      type: CORRECT_ANSWER,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
        toggleScore: false,
      },
      quizNumbers: {
        questionNumber: 3,
        quizScore: 3,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should dec score, inc question, and toggleQuestion to true ', () => {
    const action = {
      type: INCORRECT_ANSWER,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
        toggleScore: false,
      },
      quizNumbers: {
        questionNumber: 3,
        quizScore: 1,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });
});
