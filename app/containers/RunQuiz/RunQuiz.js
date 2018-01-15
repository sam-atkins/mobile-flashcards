import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RunQuiz = ({ showAnswer, showQuestion, showScore }) => (
  <View>
    <Text>Run Quiz container is here</Text>
    {showQuestion && (
      <View>
        <Text>show question is true</Text>
      </View>
    )}
    {showAnswer && (
      <View>
        <Text>show answer is true</Text>
      </View>
    )}
    {showScore && (
      <View>
        <Text>show score is true</Text>
      </View>
    )}
  </View>
);

RunQuiz.propTypes = {
  showAnswer: PropTypes.bool.isRequired,
  showQuestion: PropTypes.bool.isRequired,
  showScore: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showAnswer: state.quiz.quizStatus.toggleAnswer,
  showQuestion: state.quiz.quizStatus.toggleQuestion,
  showScore: state.quiz.quizStatus.toggleScore,
});

export default connect(mapStateToProps)(RunQuiz);
