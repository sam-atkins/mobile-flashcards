// @flow

import React from 'react';
import { Text, View } from 'react-native';

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

const DecksView = () => (
  <View>
    <Text>Main decks view</Text>
    {Object.keys(deckData).map((key) => {
      const { title } = deckData[key];
      return <Text key={title}>{title}</Text>;
    })}
  </View>
);

export default DecksView;
