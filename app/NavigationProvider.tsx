import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import useSignUpAuth from '@/store/signUpStore';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

interface NaviGationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NaviGationProviderProps> = ({
  children,
}) => {
  const { isAuthenticated } = useSignUpAuth();
  const segments = useSegments();
  const router = useRouter();
  const queryClient = new QueryClient();
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
      const inAuthGroup = segments[0] === '(auth)';
      const inProtectedGroup = segments[0] === '(tabs)';

      if (!isAuthenticated && !inAuthGroup) {
        router.replace('/(tabs)/Vegan');
      } else if   (isAuthenticated && inAuthGroup) {
        router.replace('/(tabs)/Vegan');
      }
    }
  }, [isAuthenticated, fontLoaded, segments]);
  if (!fontLoaded) {
    return null; // Show loading screen or fallback UI
  }
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default NavigationProvider;
