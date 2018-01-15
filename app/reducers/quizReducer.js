const initialState = {
  quizStatus: {
    questionNumber: 0,
    quizScore: 0,
    toggleAnswer: true,
    toggleQuestion: true,
    toggleScore: true,
  },
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default quiz;
