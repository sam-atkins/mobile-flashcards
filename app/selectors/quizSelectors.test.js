/* global describe, it, expect */
import { selectQuestionsAndAnswers, selectQuizLength } from './quizSelectors';

describe('quiz selectors', () => {
  it('should select the quiz length integer', () => {
    const initialShape = {
      decks: {
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
      },
    };
    const initialDeckData = {
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
    const title = 'React';
    expect(selectQuizLength(initialShape, title)).toBe(2);
  });

  it('should select questions as an array from state', () => {
    const initialShape = {
      decks: {
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
      },
    };
    const expectedShape = [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ];
    const title = 'React';
    expect(selectQuestionsAndAnswers(initialShape, title)).toEqual(expectedShape);
  });
});
