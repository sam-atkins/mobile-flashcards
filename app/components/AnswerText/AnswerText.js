import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import {
  handleCorrectAnswer,
  handleIncorrectAnswer,
  manageQuizEndIncrementScore,
  manageQuizEndDecrementScore,
} from '../../actions/quizActions';
// import { selectQuizLength } from '../../selectors/quizSelectors';

const AnswerText = ({
  answer,
  currentQuestion,
  userCorrectAnswer,
  totalQuizQuestions,
  userIncorrectAnswer,
  correctAndRenderQuizScore,
  incorrectAndRenderQuizScore,
}) => {
  const buttonOnPressVariations = () => {
    if (currentQuestion === totalQuizQuestions) {
      return (
        <View>
          <PrimaryButton
            text="Correct"
            onPress={() => correctAndRenderQuizScore()}
          />
          <SecondaryButton
            text="Incorrect"
            onPress={() => incorrectAndRenderQuizScore()}
          />
        </View>
      );
    }

    return (
      <View>
        <PrimaryButton text="Correct" onPress={() => userCorrectAnswer()} />
        <SecondaryButton
          text="Incorrect"
          onPress={() => userIncorrectAnswer()}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>Answer:</Text>
      <Text>{answer}</Text>
      {buttonOnPressVariations()}
    </View>
  );
};

AnswerText.propTypes = {
  answer: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuizQuestions: PropTypes.number.isRequired,
  userCorrectAnswer: PropTypes.func.isRequired,
  userIncorrectAnswer: PropTypes.func.isRequired,
  correctAndRenderQuizScore: PropTypes.func.isRequired,
  incorrectAndRenderQuizScore: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  userCorrectAnswer: () => {
    dispatch(handleCorrectAnswer());
  },
  userIncorrectAnswer: () => {
    dispatch(handleIncorrectAnswer());
  },
  correctAndRenderQuizScore: () => {
    dispatch(manageQuizEndIncrementScore());
  },
  incorrectAndRenderQuizScore: () => {
    dispatch(manageQuizEndDecrementScore());
  },
});

export default connect(null, mapDispatchToProps)(AnswerText);
