import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { resetQuiz } from '../../actions/quizActions';

const QuizScore = ({
  totalQuizQuestions,
  userCorrectScore,
  userIncorrectScore,
  userResetQuiz,
}) => (
  <View>
    <Text>
      You got {userCorrectScore} right and {userIncorrectScore} wrong out of{' '}
      {totalQuizQuestions}.
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
  userCorrectScore: PropTypes.number.isRequired,
  userIncorrectScore: PropTypes.number.isRequired,
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
