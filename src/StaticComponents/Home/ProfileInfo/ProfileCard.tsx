import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';
import { View } from 'react-native';

interface Profile {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  chef: {
    name: string;
    avatar: string;
    rating: number;
  };
  ingredients: {
    id: number;
    name: string;
    quantity: string;
    image: any;
  }[];
}
[];
interface ProfileCardProps {
  data: Profile[];
}
const { width } = Dimensions.get('window');
const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <View>
      {data!.slice(7).map((item: any) => (
        <Link key={item.id} href={`/recipeDetail/${item.id}`} replace>
          <View style={styles.slide}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.imageWrapper}
            >
              <Text style={{ color: 'white', fontSize: 10 }}>
                {item.chef.rating}
              </Text>
              <LinearGradient
                colors={[
                  'transparent',
                  'rgba(0, 0, 0, 0.5)',
                  'rgb(0, 0, 0,0.3)',
                ]}
                style={styles.overlay}
              />
              <View style={styles.textContainer}>
                <Text style={styles.imageText}>{item.title}</Text>
                <Text style={styles.cardText}>{item.chef.name}</Text>
              </View>
            </ImageBackground>
          </View>
        </Link>
      ))}
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
  cardText: {
    fontSize: 8,
    color: 'white',
  },
});
export default ProfileCard;
