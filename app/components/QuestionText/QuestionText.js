import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuestionText = (props) => {
  const { questions } = props;
  const { currentQuestion } = props;

  return (
    <View>
      <Text>{questions[currentQuestion].question}</Text>
      <PrimaryButton text="Show answer" />
    </View>
  );
};

QuestionText.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  currentQuestion: state.quiz.quizStatus.questionNumber,
});

export default connect(mapStateToProps)(QuestionText);
