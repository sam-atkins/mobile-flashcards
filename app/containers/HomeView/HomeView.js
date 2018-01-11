import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import WelcomeText from '../../components/WelcomeText';
import { selectDeckTitleAndQuestions } from '../../selectors/deckSelectors';

// TODO replace with `content` from Redux store via selector once set-up
const hardCodedContent = [
  {
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
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
];

const HomeView = (props) => {
  const renderItemList = ({ item }) => {
    const { title, questions } = item;
    return (
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
    );
  };

  return (
    <View>
      <WelcomeText />
      <View>
        <FlatList
          data={hardCodedContent}
          renderItem={renderItemList}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  content: selectDeckTitleAndQuestions(state),
});

export default connect(mapStateToProps)(HomeView);
