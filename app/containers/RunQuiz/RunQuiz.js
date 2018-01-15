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
  userQuizScore,
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
  userQuizScore: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizStatus.questionNumber,
  showAnswer: state.quiz.quizStatus.toggleAnswer,
  showQuestion: state.quiz.quizStatus.toggleQuestion,
  showScore: state.quiz.quizStatus.toggleScore,
  userQuizScore: state.quiz.quizStatus.quizScore,
});

export default connect(mapStateToProps)(RunQuiz);
