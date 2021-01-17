import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello from React Native!</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
