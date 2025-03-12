import AuthButton from '@/src/components/AuthButton';
import TextInputField from '@/src/components/TextInputField';
import useAuthForm from '@/src/hooks/useAuthForm';
import { registerSchema } from '@/src/schemas/registerScemas';
import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Register() {
  const { control, handleSubmit, errors } = useAuthForm(registerSchema);

  const onSubmit = (data: any) => {
    console.log('Register data:', data);
  };

  function setValue(arg0: string, text: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Text style={styles.title}>Register</Text>

      <TextInputField
        placeholder="First Name"
        value=""
        error={errors.firstName?.message as string | undefined}
        onChangeText={(text) => setValue('firstName', text)}
      />

      <TextInputField
        placeholder="Last Name"
        value=""
        error={errors.lastName?.message as string | undefined}
        onChangeText={(text) =>setValue('lastName', text)}
      />

      <TextInputField
        placeholder="Email"
        value=""
        error={errors.email?.message as string | undefined}
        onChangeText={(text:string) => setValue('email', text)}
      />

      <TextInputField
        placeholder="Phone"
        value=""
        error={errors.phone?.message as string | undefined}
        onChangeText={(text:string) => setValue('phone', text)}
      />

      <TextInputField
        placeholder="Password"
        secureTextEntry
        value=""
        error={errors.password?.message as string | undefined}
        onChangeText={(text:string) => setValue('password', text)}
      />

      <TextInputField
        placeholder="Confirm Password"
        secureTextEntry
        value=""
        error={errors.confirmPassword?.message as string | undefined}
        onChangeText={(text:string) => setValue('confirmPassword', text)}
      />

      <AuthButton title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
