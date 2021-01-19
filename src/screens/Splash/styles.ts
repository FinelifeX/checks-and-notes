import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    top: (Dimensions.get('window').height / 5) * -1,
    fontFamily: 'Indie Flower',
  },
  image: {
    flex: 1,
  },
});
