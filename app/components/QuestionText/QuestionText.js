import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { toggleAnswer } from '../../actions/quizActions';

const QuestionText = ({ currentQuestion, questions, showAnswer }) => (
  <View>
    <Text>{questions[currentQuestion].question}</Text>
    <PrimaryButton text="Show answer" onPress={() => showAnswer()} />
  </View>
);

QuestionText.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  showAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
});

const mapDispatchToProps = dispatch => ({
  showAnswer: () => {
    dispatch(toggleAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionText);
