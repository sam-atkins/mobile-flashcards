import { initialDeckData } from '../config/initState';
import { ADD_NEW_DECK } from '../actions/deckActions';

const decks = (state = initialDeckData, action) => {
  switch (action.type) {
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
