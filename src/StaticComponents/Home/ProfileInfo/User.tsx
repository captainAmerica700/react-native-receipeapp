import { account } from '@/appwriteConfig';
import Button from '@/src/components/button';
import useSignUpAuth from '@/store/signUpStore';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
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
const UserComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const { clearToken } = useSignUpAuth();
  const {
    modalOverlay,
    modalContent,
    modalTitle,
    modalText,
    logoutButton,
    logoutText,
    closeText,
    closeButton,
    image,
  } = styles;
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  return (
    <View>
      <Pressable onPress={async () => router.push('/(tabs)/Information')}>
        <Image source={require('@/assets/images/men.jpg')} style={image} />
      </Pressable>
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
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10, // Make it circular
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
export default UserComponent;
