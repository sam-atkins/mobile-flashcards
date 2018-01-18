import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ButtonWrapper from '../Buttons/ButtonWrapper';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const StyledView = styled.View`
  flex: 1;
`;

const QuizOverview = (props) => {
  const { title, questions } = props.navigation.state.params;

  return (
    <StyledView>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
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
        <SecondaryButton
          text="Add new question"
          onPress={() => props.navigation.navigate('NewCardForm')}
        />
      </ButtonWrapper>
    </StyledView>
  );
};

QuizOverview.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuizOverview;
