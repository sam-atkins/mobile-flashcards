import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { toggleAnswer } from '../../actions/quizActions';

const QuestionText = ({ question, showAnswer }) => (
  <View>
    <Text>{question}</Text>
    <PrimaryButton text="Show answer" onPress={() => showAnswer()} />
  </View>
);

QuestionText.propTypes = {
  question: PropTypes.string.isRequired,
  showAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  showAnswer: () => {
    dispatch(toggleAnswer());
  },
});

export default connect(null, mapDispatchToProps)(QuestionText);
