export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const handleCorrectAnswer = () => ({
  type: CORRECT_ANSWER,
});

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const handleIncorrectAnswer = () => ({
  type: INCORRECT_ANSWER,
});

export const MANAGE_QUIZ_END_INC_SCORE = 'MANAGE_QUIZ_END_INC_SCORE';
export const manageQuizEndIncrementScore = () => ({
  type: MANAGE_QUIZ_END_INC_SCORE,
});

export const MANAGE_QUIZ_END_DEC_SCORE = 'MANAGE_QUIZ_END_DEC_SCORE';
export const manageQuizEndDecrementScore = () => ({
  type: MANAGE_QUIZ_END_DEC_SCORE,
});

export const RESET_QUIZ = 'RESET_QUIZ';
export const resetQuiz = () => ({
  type: RESET_QUIZ,
});

export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';
export const toggleAnswer = () => ({
  type: TOGGLE_ANSWER,
});
