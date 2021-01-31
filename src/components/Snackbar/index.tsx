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
import styles from './styles';

const ANIM_DURATION = 1000;

const Snackbar: FC = () => {
  const { id, text, buttonText, onButtonPress, closeSnackbar } = useContext(
    SnackbarContext,
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;
  const idRef = useRef<number>(0);

  const fade = useCallback(
    (duration: number = ANIM_DURATION) => {
      setButtonDisabled(true);

      Animated.timing(animation, {
        toValue: 0,
        duration,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    },
    [animation],
  );

  const appear = useCallback(
    (duration: number = ANIM_DURATION) => {
      setButtonDisabled(false);

      Animated.timing(animation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    },
    [animation],
  );

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        if (id === idRef.current) {
          closeSnackbar();
        }
      }, 10000);

      if (id !== idRef.current) {
        fade(ANIM_DURATION / 4);
        setTimeout(appear, ANIM_DURATION / 2);
        idRef.current = id;

        return;
      }

      idRef.current = id;
      appear();
    } else {
      idRef.current = 0;
      fade();
    }
  }, [appear, closeSnackbar, fade, id]);

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
