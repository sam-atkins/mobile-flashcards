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
    questionNumber: 0,
    quizScoreCorrect: 0,
    quizScoreIncorrect: 0,
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
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect + 1,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect,
        },
      };
    case INCORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect + 1,
        },
      };
    case MANAGE_QUIZ_END_INC_SCORE:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect + 1,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect,
        },
      };
    case MANAGE_QUIZ_END_DEC_SCORE:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect + 1,
        },
      };
    case RESET_QUIZ:
      return {
        ...state,
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
    case TOGGLE_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: true,
          toggleQuestion: false,
        },
      };
    default:
      return state;
  }
};

export default quiz;
