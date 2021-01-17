import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Greeting: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;
