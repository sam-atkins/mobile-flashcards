import React, { Component } from 'react';
import { View } from 'react-native';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TextInputField from '../../components/TextInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

class NewCardForm extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleOnPress = (userEntry) => {
    // const { title, questions } = this.props.navigation.state.params;
    console.log('====================================');
    console.log('new q&a onPress -> userEntry:', userEntry);
    console.log('props -> title', this.props.navigation.state.params.title);
    console.log('====================================');
    // this.props.navigation.navigate('Home');
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
        <PrimaryButton onPress={() => this.handleOnPress(this.state)} />
      </View>
    );
  }
}

export default NewCardForm;
// export default connect(null, mapDispatchToProps)(NewCardForm);
