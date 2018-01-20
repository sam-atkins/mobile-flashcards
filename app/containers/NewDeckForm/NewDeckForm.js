import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewDeck } from '../../actions/deckActions';
import TextInputField from '../../components/TextInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class NewDeckForm extends Component {
  state = {
    title: '',
  };

  handleOnPress = (payload) => {
    const { title } = this.state;
    this.props.submitDeckTitle(payload);
    this.props.navigation.navigate('QuizOverview', { title });
  };

  render() {
    return (
      <View>
        <TextInputField
          fieldLabel="What is the title of your new deck?"
          maxLength={50}
          placeholder="Deck title"
          onChangeText={title => this.setState({ title })}
        />
        <PrimaryButton onPress={() => this.handleOnPress(this.state)} />
      </View>
    );
  }
}

NewDeckForm.propTypes = {
  submitDeckTitle: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitDeckTitle: (payload) => {
    dispatch(addNewDeck(payload));
  },
});

export default connect(null, mapDispatchToProps)(NewDeckForm);
