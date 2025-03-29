import React, { useEffect, useState, Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import FallbackUi from '@/src/StaticComponents/Fallbackui';
import Toast from 'react-native-toast-message';
import NavigationProvider from './NavigationProvider'; // Import the new provider

// Import Storybook UI (conditionally)
const StorybookUIRoot = process.env.EXPO_STORYBOOK === 'true'
  ? require('../.storybook/storybook').default
  : null;

const RootLayout: React.FC = () => {
  const colorScheme = useColorScheme();
  const [isStorybook, setIsStorybook] = useState(false);

  useEffect(() => {
    if (process.env.EXPO_STORYBOOK === 'true') {
      setIsStorybook(true);
    }
  }, []);

  if (isStorybook && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  return (
    <Suspense fallback={<FallbackUi />}>
      <NavigationProvider>
        <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="recipeDetail" />
            <Stack.Screen name="(drawer)" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
        <Toast />
      </NavigationProvider>
    </Suspense>
  );
};

export default RootLayout;
