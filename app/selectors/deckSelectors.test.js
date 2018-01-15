/* global describe, it, expect */
import { selectDeckTitleAndQuestions } from './deckSelectors';

describe('deck selectors', () => {
  it('should convert deck obj to array', () => {
    const initialShape = {
      decks: {
        React: {
          title: 'React',
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
        title: 'React',
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
      {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.',
          },
        ],
      },
    ];
    expect(selectDeckTitleAndQuestions(initialShape)).toEqual(expectedShape);
  });
});
