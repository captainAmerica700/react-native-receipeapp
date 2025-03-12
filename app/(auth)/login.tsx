import AuthButton from '@/src/components/AuthButton';
import SocialAuthButton from '@/src/components/SocialAuthButton';
import TextInputField from '@/src/components/TextInputField';
import useAuthForm from '@/src/hooks/useAuthForm';
import { loginSchema } from '@/src/schemas/loginSchema';
import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const { control, handleSubmit, errors, setValue } = useAuthForm(loginSchema);

  const onSubmit = (data: any) => {
    console.log('Login data:', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Text style={styles.title}>Login</Text>
      <TextInputField
        placeholder="Email"
        value=""
        error={errors.email?.message as string | undefined}
        onChangeText={(text) => setValue('email', text)}
      />
      <TextInputField
        placeholder="Password"
        secureTextEntry
        value=""
        error={errors.password?.message as string | undefined}
        onChangeText={(text) => setValue('password', text)}
      />
      <AuthButton title="Login" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.socialTitle}>Or login with</Text>

      <SocialAuthButton
        title="Login with Google"
        onPress={() => {}}
        backgroundColor="#DB4437"
        iconName="google"
      />
      <SocialAuthButton
        title="Login with Facebook"
        onPress={() => {}}
        backgroundColor="#4267B2"
        iconName="facebook"
      />
      <SocialAuthButton
        title="Login with Apple"
        onPress={() => {}}
        backgroundColor="#000000"
        iconName="apple"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  socialTitle: { textAlign: 'center', marginVertical: 10, fontSize: 18, color: '#666' },
});
