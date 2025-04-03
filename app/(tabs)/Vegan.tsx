import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import SpotlightComponent from '@/src/StaticComponents/Home/Spotlight';
import TrendingComponent from '@/src/StaticComponents/Home/Trending';
import TrendingMenu from '@/src/StaticComponents/Home/TrendingMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserComponent from '@/src/StaticComponents/Home/ProfileInfo/User';
import { Link, useRouter } from 'expo-router';
import { TextInput } from 'react-native';

const { height } = Dimensions.get('window');

const VeganComponent = () => {
  const { container, header, title, scrollContent } = styles;
  const router = useRouter();
  return (
    <SafeAreaView style={container}>
      {/* Header Section */}
      <View style={header}>
        <Text style={title}>Discover Best Recipes</Text>
        {/* Clickable Profile Image */}
        <UserComponent />
      </View>

      {/* Search Bar */}
      <View style={{ paddingBottom: 20 ,marginTop: 30,}}>
        <Pressable >
          <Link href="/SearchBar">
          <TextInput
            placeholder="... Search here"
            style={styles.SearchBar}
            editable={false} // Makes the TextInput non-editable
          /></Link>
          
        </Pressable>
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
  SearchBar: {
    padding: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    fontSize: 12,
    // outline: "none",
    marginTop: 10,
    borderColor: '#e5e7e0',
    borderWidth: 1,
  },
});

export default VeganComponent;
