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
  const [initialAuthCheckDone, setInitialAuthCheckDone] = useState(false);

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
    } else if (isAuthenticated && inAuthGroup && !initialAuthCheckDone) {
      // Only redirect to Vegan on initial auth check
      router.replace('/(tabs)/Vegan');
      setInitialAuthCheckDone(true);
    }
  }, [isAuthenticated, fontLoaded, segments]);

  if (!fontLoaded) {
    return null; // Show loading screen or fallback UI
  }

  return <>{children}</>;
};

export default NavigationProvider;