import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionText from '../../components/QuestionText';
import AnswerText from '../../components/AnswerText';
import QuizScore from '../../components/QuizScore';

const RunQuiz = ({
  currentQuestion,
  showAnswer,
  showQuestion,
  showScore,
  navigation,
}) => {
  const { questions } = navigation.state.params;
  const totalQuizQuestions = questions.length;

  if (currentQuestion > totalQuizQuestions) {
    // call this action creator
  }

  return (
    <View>
      <Text>Run Quiz container is here</Text>
      {showQuestion && <QuestionText questions={questions} />}
      {showAnswer && <AnswerText questions={questions} />}
      {showScore && <QuizScore totalQuizQuestions={totalQuizQuestions} />}
    </View>
  );
};

RunQuiz.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showQuestion: PropTypes.bool.isRequired,
  showScore: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
  showAnswer: state.quiz.quizDisplay.toggleAnswer,
  showQuestion: state.quiz.quizDisplay.toggleQuestion,
  showScore: state.quiz.quizDisplay.toggleScore,
});

export default connect(mapStateToProps)(RunQuiz);
