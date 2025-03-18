import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import foodData from '@/src/constants/foodData';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const SpotlightComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just For You</Text>

      {/* Swiper for multiple slides */}

      <Swiper
        autoplay
        autoplayTimeout={4}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        containerStyle={styles.swiper}
      >
        {foodData?.slice(0, 5).map((item) => (
          <Link key={item.id} href={`/recipeDetail/${item.id}`}>
            <View style={styles.slide}>
              <ImageBackground
                source={item?.imageUrl}
                style={styles.imageWrapper}
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0, 0, 0, 0.8)', 'rgb(0, 0, 0)']}
                  style={styles.overlay}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.imageText}>{item.title}</Text>
                </View>
              </ImageBackground>
            </View>
          </Link>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 15,
  },
  swiper: {
    height: 10,
    overflow: 'hidden',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderRadius: 15,
    height: 180,
    paddingBottom: 10,
  },
  imageWrapper: {
    width: width * 0.8,
    height: 157,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  imageText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default SpotlightComponent;
