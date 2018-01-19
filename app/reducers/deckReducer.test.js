/* global describe, it, expect */

import deepFreeze from 'deep-freeze';
import decks from './deckReducer';
import { ADD_NEW_CARD, ADD_NEW_DECK } from '../actions/deckActions';

const initialState = {
  React: {
    title: 'React',
    quizLength: 2,
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    quizLength: 1,
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

describe('decks reducer', () => {
  it('should return initial state', () => {
    const action = {};
    const expectedState = {
      React: {
        title: 'React',
        quizLength: 2,
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
          },
        ],
      },
      JavaScript: {
        title: 'JavaScript',
        quizLength: 1,
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
    };
    deepFreeze(initialState);
    expect(decks(initialState, action)).toEqual(expectedState);
  });

  it('should add a new card', () => {
    const payload = {
      title: 'React',
      question: 'This is a test question',
      answer: 'Test answer',
    };
    const action = {
      type: ADD_NEW_CARD,
      payload,
    };
    const expectedState = {
      React: {
        title: 'React',
        quizLength: 3,
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
          },
          {
            question: 'This is a test question',
            answer: 'Test answer',
          },
        ],
      },
      JavaScript: {
        title: 'JavaScript',
        quizLength: 1,
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
    };
    deepFreeze(initialState);
    expect(decks(initialState, action)).toEqual(expectedState);
  });

  it('should add a new deck', () => {
    const payload = {
      title: 'Udacity',
    };
    const action = {
      type: ADD_NEW_DECK,
      payload,
    };
    const expectedState = {
      React: {
        title: 'React',
        quizLength: 2,
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces',
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event',
          },
        ],
      },
      JavaScript: {
        title: 'JavaScript',
        quizLength: 1,
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
      Udacity: {
        title: 'Udacity',
        quizLength: 0,
        questions: [],
      },
    };
    deepFreeze(initialState);
    expect(decks(initialState, action)).toEqual(expectedState);
  });
});
