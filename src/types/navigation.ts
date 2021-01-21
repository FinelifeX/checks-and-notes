import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Stacks

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Greeting: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Note: {
    data: any;
  };
  Settings: undefined;
};

// Splash screen

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

// Note screen

export type NoteScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Note'
>;

export type NoteScreenRouteProp = RouteProp<HomeStackParamList, 'Note'>;

// Greetings screen

export type GreetingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Greeting'
>;
