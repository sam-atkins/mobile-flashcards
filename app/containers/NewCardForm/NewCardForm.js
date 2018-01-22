import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewCard } from '../../actions/deckActions';
import TextInputField from '../../components/TextInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class NewCardForm extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleOnPress = () => {
    if (this.state.question.length < 2) {
      return Alert.alert(
        'Your question',
        'needs more than 2 characters.',
        { text: 'OK' },
        { cancelable: false }
      );
    }

    if (this.state.answer.length < 2) {
      return Alert.alert(
        'Your answer',
        'needs more than 2 characters.',
        { text: 'OK' },
        { cancelable: false }
      );
    }

    const { title } = this.props.navigation.state.params;
    const payload = {
      title,
      question: this.state.question,
      answer: this.state.answer,
    };
    this.props.addNewCard(payload);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <TextInputField
          fieldLabel="What question would you like to add?"
          maxLength={100}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInputField
          fieldLabel="What answer would you like to add?"
          maxLength={100}
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
        />
        <PrimaryButton onPress={() => this.handleOnPress()} />
      </View>
    );
  }
}

NewCardForm.propTypes = {
  addNewCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(null, { addNewCard })(NewCardForm);
