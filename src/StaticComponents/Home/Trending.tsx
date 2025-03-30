import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
});

export default TrendingComponent;
