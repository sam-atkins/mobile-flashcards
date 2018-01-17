export const selectQuizLength = (data, title) => data.decks[title].quizLength;

export const selectQuestionsAndAnswers = (data, title) =>
  data.decks[title].questions;
