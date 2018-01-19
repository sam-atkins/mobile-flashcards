import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'mobileFlashCards:notifications';

/**
 * Accreditation: code taken from Udacity React Native 'UdaciFitness' lessons
 */
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

/**
 * Accreditation: code taken from Udacity React Native 'UdaciFitness' lessons
 */
function createNotification() {
  return {
    title: 'Learn something today!',
    body: '👋 don\'t forget to take a quiz today!',
    ios: {
      sound: true,
    },
  };
}

/**
 * Accreditation: code adapted from Udacity React Native 'UdaciFitness' lessons
 */
export function setLocalNotification(chosenTime) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: chosenTime,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
