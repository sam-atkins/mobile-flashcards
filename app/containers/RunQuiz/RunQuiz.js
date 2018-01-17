import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionText from '../../components/QuestionText';
import AnswerText from '../../components/AnswerText';
import QuizScore from '../../components/QuizScore';
import {
  selectQuizLength,
  selectQuestionsAndAnswers,
} from '../../selectors/quizSelectors';
import { manageQuizEnd } from '../../actions/quizActions';

const RunQuiz = ({
  currentQuestion,
  questionsAndAnswers,
  showAnswer,
  showQuestion,
  totalQuizQuestions,
  userCorrectScore,
  userIncorrectScore,
  navigation,
}) => {
  if (questionsAndAnswers[currentQuestion] !== undefined) {
    return (
      <View>
        {showQuestion && (
          <QuestionText
            question={questionsAndAnswers[currentQuestion].question}
          />
        )}
        {showAnswer && (
          <AnswerText
            answer={questionsAndAnswers[currentQuestion].answer}
            currentQuestion={currentQuestion}
            totalQuizQuestions={totalQuizQuestions}
          />
        )}
      </View>
    );
  }
  return (
    <QuizScore
      totalQuizQuestions={totalQuizQuestions}
      userCorrectScore={userCorrectScore}
      userIncorrectScore={userIncorrectScore}
    />
  );
};

RunQuiz.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showQuestion: PropTypes.bool.isRequired,
  totalQuizQuestions: PropTypes.number.isRequired,
  userCorrectScore: PropTypes.number.isRequired,
  userIncorrectScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
  showAnswer: state.quiz.quizDisplay.toggleAnswer,
  showQuestion: state.quiz.quizDisplay.toggleQuestion,
  questionsAndAnswers: selectQuestionsAndAnswers(
    state,
    ownProps.navigation.state.params.title
  ),
  totalQuizQuestions: selectQuizLength(
    state,
    ownProps.navigation.state.params.title
  ),
  userCorrectScore: state.quiz.quizNumbers.quizScoreCorrect,
  userIncorrectScore: state.quiz.quizNumbers.quizScoreIncorrect,
});

const mapDispatchToProps = dispatch => ({
  renderQuizScore: () => {
    dispatch(manageQuizEnd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RunQuiz);
