import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import FoodCarousel from './Carousel';

const TrendingComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending Recipes</Text>
      <FoodCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageWrapper: {
    width: '100%',
    height: 157,
    borderRadius: 10,
    marginTop: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    padding: 10,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%', // Covers the full image
    display: 'flex',
    alignSelf: 'center',
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    color: '#fff',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10, // Adjusts text position
    left: 10,
    right: 10,
  },
});

export default TrendingComponent;
