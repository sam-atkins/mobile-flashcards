import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const AnswerText = ({ currentQuestion, questions }) => (
  <View>
    <Text>{questions[currentQuestion].answer}</Text>
    <PrimaryButton text="Correct" />
    <SecondaryButton text="Incorrect" />
  </View>
);

AnswerText.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
});

export default connect(mapStateToProps)(AnswerText);
