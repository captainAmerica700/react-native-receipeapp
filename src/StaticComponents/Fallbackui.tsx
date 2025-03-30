import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const FallbackUi = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#25AE87"
        strokeWidth="2" // Use camelCase for strokeWidth
        strokeLinecap="round" // Use camelCase for strokeLinecap
        strokeLinejoin="round" // Use camelCase for strokeLinejoin
      >
        <Path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
        <Path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
        <Path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
        <Path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
        <Rect width="20" height="4" x="2" y="11" rx="1" />
      </Svg>
    </View>
  );
};

export default FallbackUi;
