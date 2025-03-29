import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import useSignUpAuth from '@/store/signUpStore';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface NaviGationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NaviGationProviderProps> = ({
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
    if (fontLoaded) {
      const inAuthGroup = segments[0] === '(tabs)';
      if (!inAuthGroup && !isAuthenticated) {
        router.replace('/(tabs)/Vegan');
      }
    }
  }, [isAuthenticated, fontLoaded, segments, router]);
  if (!fontLoaded) {
    return null; // Show loading screen or fallback UI
  }
  return <>{children}</>;
};
export default NavigationProvider;
