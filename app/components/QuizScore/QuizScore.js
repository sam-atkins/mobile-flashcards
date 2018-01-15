import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const QuizScore = ({ totalQuizQuestions, userQuizScore }) => (
  <View>
    <Text>
      Your scored {userQuizScore} points out of {totalQuizQuestions}.
    </Text>
  </View>
);

QuizScore.propTypes = {
  totalQuizQuestions: PropTypes.number.isRequired,
  userQuizScore: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  userQuizScore: state.quiz.quizDisplay.quizScore,
});

export default connect(mapStateToProps)(QuizScore);
