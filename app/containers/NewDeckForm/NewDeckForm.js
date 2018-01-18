import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewDeck } from '../../actions/deckActions';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class NewDeckForm extends Component {
  state = {
    title: '',
  };

  handleOnPress = (payload) => {
    this.props.submitDeckTitle(payload);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
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
