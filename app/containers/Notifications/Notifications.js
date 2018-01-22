import React, { Component } from 'react';
import { Alert, DatePickerIOS, View } from 'react-native';
import styled from 'styled-components/native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/helpers';

const ExplanationText = styled.Text`
  font-size: 20;
  text-align: center;
  padding-top: 10;
  padding-horizontal: 15;
`;

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenTime: new Date() };

    this.setTime = this.setTime.bind(this);
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime });
  }

  render() {
    const displayConfirmNotificationAlert = (string) => {
      Alert.alert(
        'Notifications',
        `are ${string}`,
        { text: 'OK' },
        { cancelable: false }
      );
    };
    return (
      <View>
        <ExplanationText>Set a daily reminder</ExplanationText>
        <DatePickerIOS
          date={this.state.chosenTime}
          onDateChange={this.setTime}
          mode="time"
        />
        <PrimaryButton
          onPress={() =>
            clearLocalNotification()
              .then(setLocalNotification(this.state.chosenTime))
              .then(displayConfirmNotificationAlert('activated.'))
          }
        />
        <SecondaryButton
          text="Clear notifications"
          onPress={() =>
            clearLocalNotification().then(displayConfirmNotificationAlert('cancelled.'))
          }
        />
      </View>
    );
  }
}

export default Notifications;
