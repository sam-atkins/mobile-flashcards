import React, { Component } from 'react';
import { DatePickerIOS, Text, View } from 'react-native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

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
    return (
      <View>
        <Text>
          Get a daily reminder on those days when you haven't learned with the
          app yet
        </Text>
        <DatePickerIOS
          date={this.state.chosenTime}
          onDateChange={this.setTime}
          mode="time"
        />
        <PrimaryButton />
      </View>
    );
  }
}

export default Notifications;
// export default connect(, )(Notifications);
