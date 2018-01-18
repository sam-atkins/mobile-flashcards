import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class NewCardForm extends Component {
  state = { question: '', answer: '' };
  render() {
    return (
      <View>
        <Text>New card form</Text>
      </View>
    );
  }
}

export default NewCardForm;
// export default connect(null, mapDispatchToProps)(NewCardForm);
