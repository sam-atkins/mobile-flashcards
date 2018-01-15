import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WelcomeText from '../../components/WelcomeText';
import { selectDeckTitleAndQuestions } from '../../selectors/deckSelectors';

class HomeView extends Component {
  render() {
    this.renderItemList = ({ item }) => {
      const { title, questions } = item;
      return (
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('QuizOverview', {
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
            data={this.props.content}
            renderItem={this.renderItemList}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}

HomeView.propTypes = {
  content: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: selectDeckTitleAndQuestions(state),
});

export default connect(mapStateToProps)(HomeView);
