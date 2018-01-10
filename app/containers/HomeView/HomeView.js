import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const deckData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const HomeView = props => (
  <View>
    <Text>Welcome to Mobile Flashcards!</Text>
    <Text>What do you want to learn today?</Text>
    {Object.keys(deckData).map((key) => {
      const { title, questions } = deckData[key];
      return (
        <View key={title}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('QuizOverview', {
                title,
                questions,
              })
            }
          >
            <Text>{title}</Text>
            <Text>{questions.length} cards</Text>
          </TouchableOpacity>
        </View>
      );
    })}
  </View>
);

export default HomeView;
