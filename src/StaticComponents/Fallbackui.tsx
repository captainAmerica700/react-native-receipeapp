import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';

const FallbackUi = () => {
  // Animated value for vertical movement
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(withTiming(-10, { duration: 500 }), -1, true);
  }, []);

  // Apply animation to SVG
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Animated.View style={animatedStyle}>
          <Svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#25AE87"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
            <Path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
            <Path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
            <Path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
            <Rect width="20" height="4" x="2" y="11" rx="1" />
          </Svg>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 3,
    borderColor: '#25AE87',
    borderRadius: 10,
    padding: 20,
  },
});

export default FallbackUi;
