import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import { toggleAnswer } from '../../actions/quizActions';

const StyledQuestionText = styled.Text`
  font-size: 20;
  padding-horizontal: 15;
  padding-vertical: 25;
  text-align: center;
`;

const QuestionsRemainingText = styled.Text`
  font-size: 12;
  font-style: italic;
  padding-horizontal: 15;
  padding-vertical: 25;
  text-align: center;
`;

const QuestionText = ({
  currentQuestionNum,
  question,
  quizLength,
  showAnswer,
}) => (
  <View>
    <StyledQuestionText>{question}</StyledQuestionText>
    <PrimaryButton text="Show answer" onPress={() => showAnswer()} />
    <QuestionsRemainingText>
      {quizLength - currentQuestionNum} question(s) remaining including this one
    </QuestionsRemainingText>
  </View>
);

QuestionText.propTypes = {
  currentQuestionNum: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  quizLength: PropTypes.number.isRequired,
  showAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.decks[ownProps.deckTitle].quizLength,
  currentQuestionNum: state.quiz.quizNumbers.questionNumber,
});

const mapDispatchToProps = dispatch => ({
  showAnswer: () => {
    dispatch(toggleAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionText);
