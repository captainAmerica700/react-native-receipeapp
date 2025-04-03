import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SpotlightComponent from '@/src/StaticComponents/Home/Spotlight';
import TrendingComponent from '@/src/StaticComponents/Home/Trending';
import SearchBar from './SearchBar';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
const { height } = Dimensions.get('window');
const FastFood = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Discover FastFood Recipes</Text>
      </View>

      {/* Search Bar */}
      <View style={{ paddingBottom: 20 }}>
        <Pressable>
          <Link href="/SearchBar">
            <TextInput
              placeholder="... Search here"
              style={styles.SearchBar}
              editable={false} // Makes the TextInput non-editable
            />
          </Link>
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <View>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
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
    width: '100%',
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

export default FastFood;
