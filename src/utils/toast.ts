import { Alert, NativeModules, Platform } from 'react-native';

const { Toast } = NativeModules;

type ToastDuration = 'SHORT' | 'LONG';

export const showToast = ({
  message,
  duration,
  title,
}: {
  message: string;
  duration: ToastDuration;
  title: string;
}) => {
  Platform.OS === 'android'
    ? Toast.show(message, duration)
    : Alert.alert(title, message);
};
