import Menu from '@/src/StaticComponents/profileMenu';
import Usertabs from '@/src/StaticComponents/usertabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// interface Information{
//     isVisible : boolean;
//     setVisible:(visible: boolean) => void;
// }
const Information = () => {
  const [isVisible, setVisible] = useState(false);
  const data = [
    {
      title: 'Recipe',
      value: '4',
    },
    {
      title: 'Followers',
      value: '2.5M',
    },
    {
      title: 'Following',
      value: '259',
    },
  ];
  const ProfileData = ['Account', 'Search', 'setting', 'Signout'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        {/* <Modal visible={isVisible} onRequestClose={()=> setVisible(false)}> */}
        <Text style={styles.textHeader}>Profile </Text>
        {/* </Modal> */}

        <TouchableOpacity
          // onPress={() => alert('More options')}
          style={{ alignSelf: 'center' }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Menu Menulist={ProfileData} />
      </View>
      <View style={{ padding: 25 }}>
        <View style={styles.info}>
          <Image
            source={require('@/assets/images/men.jpg')}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          />
          {data.map((item) => (
            <View
              key={item.title}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text
                  style={{
                    color: '#A9A9A9',
                    fontSize: 12,
                    fontWeight: 'normal',
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 19,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {item.value}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
            Name
          </Text>
          <Text style={{ color: '#A9A9A9', fontSize: 11, fontWeight: '500' }}>
            chef
          </Text>
        </View>
        <Text
          style={{
            color: '#A9A9A9',
            fontSize: 13,
            fontWeight: 'normal',
            width: '70%',
          }}
          numberOfLines={3}
        >
          Description
          DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
        </Text>
      </View>
      <View>
        <Usertabs />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items to edges
    paddingHorizontal: 20, // Adds spacing
    height: 60, // Set a fixed height
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1, // Makes text take available space
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
  },
  modal: {
    justifyContent: 'flex-end', // Opens from the bottom
    margin: 0,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
});

export default Information;
