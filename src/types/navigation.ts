import { RouteProp } from '@react-navigation/native';
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

export type HomeStackParamList = {
  Home: undefined;
  Note: {
    data: any;
  };
  Settings: undefined;
};

export type NoteScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Note'
>;

export type NoteScreenRouteProp = RouteProp<HomeStackParamList, 'Note'>;
