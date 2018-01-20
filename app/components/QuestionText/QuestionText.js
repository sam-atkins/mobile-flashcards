import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { toggleAnswer } from '../../actions/quizActions';

const StyledQuestionText = styled.Text`
  font-size: 20;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const QuestionText = ({ question, showAnswer }) => (
  <View>
    <StyledQuestionText>{question}</StyledQuestionText>
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
