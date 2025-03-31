import React from 'react';
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
import TrendingMenu from '@/src/StaticComponents/Home/TrendingMenu';
import UserComponent from '../../src/StaticComponents/Home/User';
const { height } = Dimensions.get('window');

const VeganComponent = () => {
  const { container, header, title, image, scrollContent } = styles;

  return (
    <SafeAreaView style={container}>
      {/* Header Section */}
      <View style={header}>
        <Text style={title}>Discover Best Recipes</Text>
        {/* Clickable Profile Image */}
        <UserComponent />
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
});

export default VeganComponent;
