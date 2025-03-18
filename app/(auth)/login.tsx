import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Video } from 'expo-av';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Link, useRouter } from 'expo-router';
import { account } from '@/appwriteConfig';
import Toast from 'react-native-toast-message';
import useSignUpAuth from '@/store/signUpStore';

interface LoginUserParams {
  email: string;
  password: string;
}
export const loginUser = async ({
  email,
  password,
}: LoginUserParams): Promise<any> => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    Toast.show({
      type: 'success',
      text1: 'Login Successful',
      text2: 'Welcome back!',
    });

    return session;
  } catch (error: any) {
    console.error('Login failed:', error);
    Toast.show({
      type: 'error',
      text1: 'Login Failed',
      text2: error.message || 'Please check your credentials and try again.',
    });
    throw error;
  }
};
// Validation Schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
  const { setToken } = useSignUpAuth();
  const router = useRouter();
  const handleLogin = async (values: any, { resetForm }: any) => {
    try {
      const { email, password } = values;
      const token = await loginUser({ email, password }); // Get token from Appwrite

      if (token) {
        setToken(token); // Store in Zustand
        router.push('/Vegan');
      }

      resetForm();
    } catch (err) {
      console.log('Login Error:', err);
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Video */}
      {/* <Video
        source={require("@/assets/images/login.mp4")} // Replace with your video path
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        isMuted
      /> */}

      {/* Overlay with Reduced Opacity */}
      {/* <View style={styles.overlay} /> */}

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              {/* Email Input */}
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* Password Input */}
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {/* Login Button */}
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.linktext}>
          If first time?{' '}
          <Link href={'/register'}>
            <Text style={styles.linkHighlight}>Register Here</Text>
          </Link>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity here
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent input background
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#000',
  },
  googleButton: {
    width: '100%',
    height: 50,
    marginBottom: 15,
  },
  appleButton: {
    width: '100%',
    height: 50,
  },
  linktext: {
    color: '#000',
    fontSize: 12,
  },
  linkHighlight: {
    color: '#3ca7f6',
  },
});

export default LoginScreen;
