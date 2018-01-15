import { combineReducers } from 'redux';
import decks from './deckReducer';
import quiz from './quizReducer';

export default combineReducers({
  decks,
  quiz,
});
