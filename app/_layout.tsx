import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import FallbackUi from '@/src/StaticComponents/Fallbackui';
import Toast from 'react-native-toast-message';
import NavigationProvider from './NavigationProvider'; // Import the new provider

const RootLayout: React.FC = () => {
  return (
    <Suspense fallback={<FallbackUi />}>
      {/* <NavigationProvider> */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(drawer)" />
          <Stack.Screen name="(auth)" />
        </Stack>
        <StatusBar style="auto" />
        <Toast />
      {/* </NavigationProvider> */}
    </Suspense>
  );
};

export default RootLayout;
