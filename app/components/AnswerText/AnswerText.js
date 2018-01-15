import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import {
  handleCorrectAnswer,
  handleIncorrectAnswer,
} from '../../actions/quizActions';

const AnswerText = ({
  currentQuestion,
  questions,
  userCorrectAnswer,
  userIncorrectAnswer,
}) => (
  <View>
    <Text>Answer:</Text>
    <Text>{questions[currentQuestion].answer}</Text>
    <PrimaryButton text="Correct" onPress={() => userCorrectAnswer()} />
    <SecondaryButton text="Incorrect" onPress={() => userIncorrectAnswer()} />
  </View>
);

AnswerText.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  userCorrectAnswer: PropTypes.func.isRequired,
  userIncorrectAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
});

const mapDispatchToProps = dispatch => ({
  userCorrectAnswer: () => {
    dispatch(handleCorrectAnswer());
  },
  userIncorrectAnswer: () => {
    dispatch(handleIncorrectAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerText);
