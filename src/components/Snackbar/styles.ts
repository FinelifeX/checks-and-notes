import Colors from '@constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    width: Dimensions.get('screen').width - 32,
    flexDirection: 'row',
    maxHeight: 128,
    marginHorizontal: 16,
    backgroundColor: Colors.darkestBlue,
    borderRadius: 4,
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: Colors.white,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginVertical: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#8F9BB3',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default styles;
