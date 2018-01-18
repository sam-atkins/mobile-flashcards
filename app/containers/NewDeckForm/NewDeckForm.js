import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class NewDeckForm extends Component {
  state = {
    deckTitle: '',
  };
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck title"
          onChangeText={deckTitle => this.setState({ deckTitle })}
        />
        {console.log('state:', this.state.deckTitle)}
        <PrimaryButton onPress={() => console.log('new deck pressed submit')} />
      </View>
    );
  }
}

export default NewDeckForm;
// export default connect(, )(NewDeckForm);
