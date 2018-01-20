import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ButtonWrapper from '../Buttons/ButtonWrapper';
import PrimaryButton from '../Buttons/PrimaryButton';

const StyledView = styled.View`
  flex: 1;
`;

const StyledTitleText = styled.Text`
  font-size: 20;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const StyledQuestionsNumText = styled.Text`
  font-size: 16;
  font-style: italic;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const QuizOverview = (props) => {
  const { title, questions } = props.navigation.state.params;

  return (
    <StyledView>
      <StyledTitleText>Quiz: {title}</StyledTitleText>
      <StyledQuestionsNumText>{questions.length} cards</StyledQuestionsNumText>
      <ButtonWrapper>
        <PrimaryButton
          text="Start quiz"
          onPress={() =>
            props.navigation.navigate('Quiz', {
              title,
              questions,
            })
          }
        />
        <PrimaryButton
          text="Add new question"
          onPress={() => props.navigation.navigate('NewCardForm', { title })}
        />
      </ButtonWrapper>
    </StyledView>
  );
};

QuizOverview.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuizOverview;
