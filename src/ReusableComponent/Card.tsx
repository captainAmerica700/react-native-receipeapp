import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
interface CardProps {
  imageUrl: string;
  title: string;
  rating: number;
  avatar: string;
  name: string;
}
const Card = ({ imageUrl, title, rating, avatar, name }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <Text style={styles.title}>{title}</Text>
      <BlurView style={styles.bottomContainer} intensity={40} tint="dark">
        <View style={styles.infoContainer}>
          <Text style={styles.rating}>⭐ {rating}</Text>
          <View style={styles.chefContainer}>
            <Image source={{ uri: avatar }} style={styles.chefAvatar} />
            <Text style={styles.chefName}>{name}</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    marginVertical: 15,
  },

  card: {
    width: width * 0.42,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
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
export default Card;
