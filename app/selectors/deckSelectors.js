export const selectDeckTitleAndQuestions = deckData =>
  Object.keys(deckData).map(key => ({
    title: deckData[key].title,
    questions: deckData[key].questions,
  }));
