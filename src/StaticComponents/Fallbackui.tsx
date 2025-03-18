import React from 'react';
import { View } from 'react-native';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#25AE87"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-sandwich"
      >
        <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
        <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
        <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
        <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
        <rect width="20" height="4" x="2" y="11" rx="1" />
      </svg>
    </View>
  );
};

export default FallbackUi;
