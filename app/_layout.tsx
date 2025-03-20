import React, { useEffect, Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import FallbackUi from '@/src/StaticComponents/Fallbackui';
import Toast from 'react-native-toast-message';
import useSignUpAuth from '@/store/signUpStore';

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Custom hook for managing user authentication state
  const { isAuthenticated } = useSignUpAuth();

  // Hook to get the current color scheme (light or dark)
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide the splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If fonts are not loaded yet, prevent rendering
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Suspense fallback={<FallbackUi />}>
      {/* Theme provider based on color scheme */}
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Conditionally render screens based on authentication status */}
          {isAuthenticated ? (
            // Authenticated screens (e.g., Home, Profile)
            <>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="recipeDetail"
                options={{ headerShown: true }}
              />
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </>
          ) : (
            // Unauthenticated screens (e.g., Login, Register)
            <>
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="register" options={{ headerShown: false }} />
            </>
          )}

          {/* Fallback screen for not found route */}
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Status bar configuration */}
        <StatusBar style="auto" />
      </ThemeProvider>

      {/* Toast component for notifications */}
      <Toast />
    </Suspense>
  );
}
