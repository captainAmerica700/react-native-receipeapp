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
import Svg, { Path } from 'react-native-svg';
import { OAuthProvider } from 'appwrite';

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
  const _HandleGoolgeLogin = () => {
    account.createOAuth2Session(
      'google' as OAuthProvider,
      'http://localhost:8081/Vegan', // Success redirect URL
      'http://localhost:8081/login',
    );
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
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',alignItems:'center',gap:10, marginVertical: 10 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={_HandleGoolgeLogin}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Svg width="24" height="24" viewBox="0 0 48 48">
              <Path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <Path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <Path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <Path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </Svg>
          </View>
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,]}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Svg width="24" height="24" viewBox="0 0 48 48">
              <Path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              />
              <Path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              />
            </Svg>
          </View>
          <Text style={styles.text}>facebook</Text>
        </TouchableOpacity>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    maxWidth:130,
    width:'100%',
    maxHeight:50,
    height:'100%'

  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 3,
    marginRight: 12,
  },
  text: { fontSize: 12, color: '#4C585B',fontWeight:'500' },

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
