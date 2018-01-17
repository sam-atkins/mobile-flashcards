import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { resetQuiz } from '../../actions/quizActions';

const QuizScore = ({ totalQuizQuestions, userQuizScore, userResetQuiz }) => (
  <View>
    <Text>
      Your scored {userQuizScore} points out of {totalQuizQuestions}.
    </Text>
    <PrimaryButton
      text="Reset Quiz?"
      onPress={() => {
        userResetQuiz();
      }}
    />
  </View>
);

QuizScore.propTypes = {
  totalQuizQuestions: PropTypes.number.isRequired,
  userQuizScore: PropTypes.number.isRequired,
  userResetQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userQuizScore: state.quiz.quizNumbers.quizScore,
});

const mapDispatchToProps = dispatch => ({
  userResetQuiz: () => {
    dispatch(resetQuiz());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScore);
