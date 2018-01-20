import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import WelcomeText from '../../components/WelcomeText';
import { selectDeckTitleAndQuestions } from '../../selectors/deckSelectors';

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 10;
`;

const StyledItemTitleText = styled.Text`
  font-size: 18;
  font-weight: bold;
  padding-horizontal: 15;
  text-align: center;
`;

const StyledItemCardText = styled.Text`
  font-size: 16;
  font-style: italic;
  padding-horizontal: 15;
  text-align: center;
`;

class HomeView extends Component {
  render() {
    this.renderItemList = ({ item }) => {
      const { title, questions } = item;
      return (
        <StyledTouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('QuizOverview', {
              title,
              questions,
            })
          }
        >
          <StyledItemTitleText>{title}</StyledItemTitleText>
          <StyledItemCardText>{questions.length} cards</StyledItemCardText>
        </StyledTouchableOpacity>
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
