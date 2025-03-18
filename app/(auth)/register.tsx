import AuthButton from '@/src/components/AuthButton';
import TextInputField from '@/src/components/TextInputField';
import useAuthForm from '@/src/hooks/useAuthForm';
import { registerSchema } from '@/src/schemas/registerScemas';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { account } from '@/appwriteConfig';
import Toast from 'react-native-toast-message';
import { Account, Client, OAuthProvider } from 'appwrite';

interface RegisterUserParams {
  email: string;
  password: string;
  name: string;
}

export const registerUser = async ({
  email,
  password,
  name,
}: RegisterUserParams): Promise<any> => {
  try {
    const user = await account.create('unique()', email, password, name);
    Toast.show({
      type: 'success',
      text1: 'Registration Successful',
      text2: 'You can now log in!',
    });

    return user;
  } catch (error: any) {
    console.error('Registration failed:', error);
    Toast.show({
      type: 'error',
      text1: 'Registration Failed',
      text2: error.message || 'Please try again.',
    });
    throw error;
  }
};

export default function Register() {
  const { handleSubmit, errors, setValue, watch, reset } =
    useAuthForm(registerSchema);
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const { email, password, firstName, lastName } = data;
      const name = `${firstName} ${lastName}`;
      await registerUser({ email, password, name });

      // Reset form fields after successful registration
      reset();

      router.push('/login');
    } catch (err) {
      console.log(err);
    }
  };
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67d187d9001139f00079');

  const account = new Account(client);

  const _HandleGoolgeLogin = () => {
    account.createOAuth2Session(
      'google' as OAuthProvider,
      'http://localhost:8081/Vegan', // Success redirect URL
      'http://localhost:8081/login',
    );
  };

  const _HandleFacebookLogin = () => {
    account.createOAuth2Session(
      'facebook' as OAuthProvider,
      'http://localhost:8081/Vegan', // Success redirect URL
      'http://localhost:8081/login',
    );
  };
  return (
    <View style={styles.container}>
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Text style={styles.title}>Register</Text>

      <TextInputField
        placeholder="First Name"
        value={watch('firstName', '')}
        error={errors.firstName?.message as string | undefined}
        onChangeText={(text) => setValue('firstName', text)}
      />

      <TextInputField
        placeholder="Last Name"
        value={watch('lastName', '')}
        error={errors.lastName?.message as string | undefined}
        onChangeText={(text) => setValue('lastName', text)}
      />

      <TextInputField
        placeholder="Email"
        value={watch('email', '')}
        error={errors.email?.message as string | undefined}
        onChangeText={(text) => setValue('email', text)}
      />

      <TextInputField
        placeholder="Phone"
        value={watch('phone', '')}
        error={errors.phone?.message as string | undefined}
        onChangeText={(text) => setValue('phone', text)}
      />

      <TextInputField
        placeholder="Password"
        secureTextEntry
        value={watch('password', '')}
        error={errors.password?.message as string | undefined}
        onChangeText={(text) => setValue('password', text)}
      />

      <TextInputField
        placeholder="Confirm Password"
        secureTextEntry
        value={watch('confirmPassword', '')}
        error={errors.confirmPassword?.message as string | undefined}
        onChangeText={(text) => setValue('confirmPassword', text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={_HandleGoolgeLogin}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </View>
        <Text style={styles.text}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
        </View>
        <Text style={styles.text}>Continue with facebook</Text>
      </TouchableOpacity>

      <AuthButton title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 13, color: '#4C585B' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 5,
    marginRight: 12,
  },
});
