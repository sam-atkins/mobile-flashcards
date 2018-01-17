/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import quiz from './quizReducer';
import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  MANAGE_QUIZ_END_INC_SCORE,
  MANAGE_QUIZ_END_DEC_SCORE,
  RESET_QUIZ,
  TOGGLE_ANSWER,
} from '../actions/quizActions';

const initialState = {
  quizDisplay: {
    toggleAnswer: false,
    toggleQuestion: true,
  },
  quizNumbers: {
    questionNumber: 2,
    quizScoreCorrect: 2,
    quizScoreIncorrect: 2,
  },
};

describe('quiz reducer', () => {
  it('should return initial state', () => {
    const action = {};
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
      },
      quizNumbers: {
        questionNumber: 2,
        quizScoreCorrect: 2,
        quizScoreIncorrect: 2,
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
      },
      quizNumbers: {
        questionNumber: 3,
        quizScoreCorrect: 3,
        quizScoreIncorrect: 2,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should inc score & question, and toggleQuestion to true ', () => {
    const action = {
      type: INCORRECT_ANSWER,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
      },
      quizNumbers: {
        questionNumber: 3,
        quizScoreCorrect: 2,
        quizScoreIncorrect: 3,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should toggleScore to true and increment quizNumbers', () => {
    const action = {
      type: MANAGE_QUIZ_END_INC_SCORE,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: false,
      },
      quizNumbers: {
        questionNumber: 3,
        quizScoreCorrect: 3,
        quizScoreIncorrect: 2,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should toggleScore to true and increment quizNumbers', () => {
    const action = {
      type: MANAGE_QUIZ_END_DEC_SCORE,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: false,
      },
      quizNumbers: {
        questionNumber: 3,
        quizScoreCorrect: 2,
        quizScoreIncorrect: 3,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });

  it('should reset the quiz', () => {
    const action = {
      type: RESET_QUIZ,
    };
    const expectedState = {
      quizDisplay: {
        toggleAnswer: false,
        toggleQuestion: true,
      },
      quizNumbers: {
        questionNumber: 0,
        quizScoreCorrect: 0,
        quizScoreIncorrect: 0,
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
      },
      quizNumbers: {
        questionNumber: 2,
        quizScoreCorrect: 2,
        quizScoreIncorrect: 2,
      },
    };
    deepFreeze(initialState);
    expect(quiz(initialState, action)).toEqual(expectedState);
  });
});
