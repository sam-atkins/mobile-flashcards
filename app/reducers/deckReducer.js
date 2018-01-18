import { initialDeckData } from '../config/initState';
import { ADD_NEW_DECK } from '../actions/deckActions';

const decks = (state = initialDeckData, action) => {
  switch (action.type) {
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.deckTitle]: {
          title: action.payload.deckTitle,
          quizLength: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default decks;
