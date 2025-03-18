import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import foodData from '@/src/constants/foodData';
import { useQuery } from '@tanstack/react-query';
const { width } = Dimensions.get('window');

{
  {
    width;
  }
}

const FoodCarousel = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: 300 }}
      >
        {foodData.map((item: any) => (
          <Link key={item.id} href={`/recipeDetail/${item.id}`}>
            <View style={styles.card}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.backgroundImage}
              />
              <View style={styles.overlay} />
              <Text style={styles.title}>{item.title}</Text>
              <BlurView
                style={styles.bottomContainer}
                intensity={40}
                tint="dark"
              >
                <View style={styles.infoContainer}>
                  <Text style={styles.rating}>⭐ {item.chef.rating}</Text>
                  <View style={styles.chefContainer}>
                    <Image
                      source={{ uri: item.chef.avatar }}
                      style={styles.chefAvatar}
                    />
                    <Text style={styles.chefName}>{item.chef.name}</Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    marginVertical: 15,
  },

  card: {
    width: width * 0.55,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    marginRight: 15, // ✅ Ensure spacing between cards
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  chefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chefName: {
    fontSize: 10,
    color: 'white',
    marginLeft: 6,
  },
  chefAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
  },
});

export default FoodCarousel;
