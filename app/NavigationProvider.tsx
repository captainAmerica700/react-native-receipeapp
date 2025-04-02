import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import useSignUpAuth from '@/store/signUpStore';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const { isAuthenticated } = useSignUpAuth();
  const segments = useSegments();
  const router = useRouter();
  const [fontLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  useEffect(() => {
    if (!fontLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inProtectedGroup = segments[0] === '(tabs)';

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      // Only redirect to Vegan if the user is logging in, NOT every time
      router.replace('/(tabs)/Vegan');
    }
  }, [isAuthenticated, fontLoaded]);

  if (!fontLoaded) {
    return null; // Show loading screen or fallback UI
  }

  return <>{children}</>;
};

export default NavigationProvider;
