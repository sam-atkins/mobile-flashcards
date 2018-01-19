import React, { Component } from 'react';
import { View } from 'react-native';
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
    const { title } = this.props.navigation.state.params;
    const payload = {
      title,
      question: this.state.question,
      answer: this.state.answer,
    };
    this.props.submitCard(payload);
    this.props.navigation.navigate('Home');
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
  submitCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitCard: (payload) => {
    dispatch(addNewCard(payload));
  },
});

export default connect(null, mapDispatchToProps)(NewCardForm);
