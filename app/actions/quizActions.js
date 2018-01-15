export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const handleCorrectAnswer = () => ({
  type: CORRECT_ANSWER,
});

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const handleIncorrectAnswer = () => ({
  type: INCORRECT_ANSWER,
});

export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';
export const toggleAnswer = () => ({
  type: TOGGLE_ANSWER,
});
