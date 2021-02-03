import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Easing,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
} from 'react-native';

import { SnackbarContext } from '@context/snackbarContext';
import sleep from '@utils/sleep';

import styles from './styles';

const ANIM_DURATION = 500;

const Snackbar: FC = () => {
  const { id, text, buttonText, onButtonPress, closeSnackbar } = useContext(
    SnackbarContext,
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;
  const idRef = useRef<number>(0);

  const animate = useCallback(
    (action: 'appear' | 'fade', onFinish?: () => void) => {
      Animated.timing(animation, {
        toValue: action === 'appear' ? 1 : 0,
        duration: ANIM_DURATION,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(onFinish);
    },
    [animation],
  );

  useEffect(() => {
    if (id) {
      sleep(8000).then(() => {
        if (id === idRef.current) {
          closeSnackbar();
        }
      });

      if (idRef.current !== id) {
        idRef.current = id;
        animate('fade', () => animate('appear'));
      } else {
        idRef.current = id;
        animate('appear');
      }

      setButtonDisabled(false);
    } else {
      idRef.current = 0;
      animate('fade');
      setButtonDisabled(true);
    }
  }, [animate, closeSnackbar, id]);

  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <ScrollView contentContainerStyle={styles.textContainer}>
        {typeof text === 'string' ? (
          <Text style={styles.text}>{text}</Text>
        ) : (
          text
        )}
      </ScrollView>
      {!!buttonText && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            disabled={buttonDisabled}
            onPress={() => {
              closeSnackbar();
              onButtonPress?.();
            }}
          >
            <Text style={styles.buttonText} maxFontSizeMultiplier={1.5}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

export default Snackbar;
