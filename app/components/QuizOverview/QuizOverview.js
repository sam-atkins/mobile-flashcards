import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const QuizOverview = (props) => {
  const { title, questions } = props.navigation.state.params;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
    </View>
  );
};

QuizOverview.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuizOverview;
