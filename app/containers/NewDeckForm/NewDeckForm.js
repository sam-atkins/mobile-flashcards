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
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck title"
          onChangeText={title => this.setState({ title })}
        />
        <PrimaryButton onPress={() => this.props.submitDeckTitle(this.state)} />
      </View>
    );
  }
}

NewDeckForm.propTypes = {
  submitDeckTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitDeckTitle: (payload) => {
    dispatch(addNewDeck(payload));
  },
});

export default connect(null, mapDispatchToProps)(NewDeckForm);
