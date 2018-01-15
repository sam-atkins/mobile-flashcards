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
    questionNumber: 0,
    quizScore: 0,
  },
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
          toggleScore: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScore: state.quizNumbers.quizScore + 1,
        },
      };
    case INCORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
          toggleScore: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScore: state.quizNumbers.quizScore - 1,
        },
      };
    case TOGGLE_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: true,
          toggleQuestion: false,
          toggleScore: false,
        },
      };
    default:
      return state;
  }
};

export default quiz;
