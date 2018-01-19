import { initialDeckData } from '../config/initState';
import { ADD_NEW_CARD, ADD_NEW_DECK } from '../actions/deckActions';

const decks = (state = initialDeckData, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.title]: {
          title: state[action.payload.title].title,
          quizLength: state[action.payload.title].quizLength + 1,
          questions: [
            ...state[action.payload.title].questions,
            {
              question: action.payload.question,
              answer: action.payload.answer,
            },
          ],
        },
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.title]: {
          ...action.payload,
          quizLength: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default decks;
