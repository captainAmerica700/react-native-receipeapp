import Button from '@/src/components/button';
import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';

const { height, width } = Dimensions.get('window');
 function AppEntryComponent() {
  const router = useRouter();
  const onPress = () => {
    router.push('/(tabs)/Vegan');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Image */}
      <ImageBackground
        source={{uri:'https://zesty-meerkat-39c348.netlify.app/images/Rectangle6.jpg'}} // Make sure it's a PNG/JPG
        style={styles.imageBackground}
        resizeMode='cover'
      >
        {/* Dark Overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgb(0, 0, 0)']}
          style={styles.overlay}
        />

        {/* Content Container */}
        <View style={styles.container}>
          <Text style={styles.MainText}>Recipe Book</Text>
          <Text style={styles.subText}>Excellent recipe at your fingertips</Text>
          <Button style={styles.button} onPress={onPress}>
            Get Started
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: width,
    height: height, 
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 50, // Adjust position
    width: '100%',
  },
  MainText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  subText: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#25AE87',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
});

export default AppEntryComponent;
