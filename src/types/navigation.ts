import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Note } from './notes';

// Stacks

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Greeting: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Note?: {
    note: Note;
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

// Home screen

export type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;
