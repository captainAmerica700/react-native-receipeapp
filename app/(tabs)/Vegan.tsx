import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/src/StaticComponents/Home/SearchBar';
import SpotlightComponent from '@/src/StaticComponents/Home/Spotlight';
import TrendingComponent from '@/src/StaticComponents/Home/Trending';
import { account } from '@/appwriteConfig';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import useSignUpAuth from '@/store/signUpStore';
import TrendingMenu from '@/src/StaticComponents/Home/TrendingMenu';
import FallbackUi from '@/src/StaticComponents/Fallbackui';
const { height } = Dimensions.get('window');
export const logoutUser = async (): Promise<void> => {
  try {
    await account.deleteSession('current'); // Logs out the current session

    Toast.show({
      type: 'success',
      text1: 'Logged Out',
      text2: 'You have been successfully logged out.',
    });
  } catch (error: any) {
    console.error('Logout failed:', error);
    Toast.show({
      type: 'error',
      text1: 'Logout Failed',
      text2: error.message || 'Something went wrong. Please try again.',
    });
  }
};

const VeganComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  // Dummy user data (replace with actual user data from state/context)
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  const {
    container,
    header,
    title,
    image,
    scrollContent,
    modalOverlay,
    modalContent,
    modalTitle,
    modalText,
    logoutButton,
    logoutText,
    closeText,
    closeButton,
  } = styles;
  const { clearToken } = useSignUpAuth();
  return (
    <SafeAreaView style={container}>
      {/* Header Section */}
      <View style={header}>
        <Text style={title}>Discover Best Recipes</Text>
        {/* Clickable Profile Image */}
        <Pressable
          onPress={async () => {
            await logoutUser();
            setModalVisible(false);
            clearToken();
            router.push('/login'); // Add this line
          }}
        >
          <Image source={require('@/assets/images/men.jpg')} style={image} />
        </Pressable>
      </View>

      {/* Search Bar */}
      <View style={{ paddingBottom: 20 }}>
        <SearchBar />
      </View>
      <View>
        <TrendingMenu />
      </View>
      {/* Scrollable Content */}
      <View>
        <ScrollView style={scrollContent} showsVerticalScrollIndicator={false}>
          <SpotlightComponent />
          <TrendingComponent />
        </ScrollView>
      </View>

      {/* User Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalOverlay}>
          <View style={modalContent}>
            {/* User Details */}
            <Text style={modalTitle}>User Info</Text>
            <Text style={modalText}>Name: {user.name}</Text>
            <Text style={modalText}>Email: {user.email}</Text>

            {/* Logout Button */}
            <Pressable
              style={logoutButton}
              onPress={async () => {
                await logoutUser();
                setModalVisible(false);
              }}
            >
              <Text style={logoutText}>Sign Out</Text>
            </Pressable>

            {/* Close Modal Button */}
            <Pressable
              style={closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#25AE87',
    fontWeight: 'bold',
    fontSize: 26,
    width: '60%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10, // Make it circular
  },
  scrollContent: {
    paddingBottom: 10,
    height: height * 0.6,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
  closeText: {
    color: '#007bff',
  },
});

export default VeganComponent;
