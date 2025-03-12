import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const foodData = [
  {
    id: 1,
    title: "Delicious Pasta",
    imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    chef: {
      name: "Chef John",
      avatar: "https://source.unsplash.com/50x50/?chef",
      rating: 4.8,
    },
  },
  {
    id: 2,
    title: "Spicy Pizza",
    imageUrl: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    chef: {
      name: "Chef Emma",
      avatar: "https://source.unsplash.com/50x50/?cook",
      rating: 4.6,
    },
  },
  {
    id: 3,
    title: "Tasty Burger",
    imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    chef: {
      name: "Chef Alex",
      avatar: "https://source.unsplash.com/50x50/?chef,portrait",
      rating: 4.7,
    },
  },
];

const FoodCarousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true}
        showsPagination={true}
        loop={true}
        autoplayTimeout={3}
        style={styles.wrapper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {foodData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.backgroundImage} />
            <View style={styles.overlay} />
            <Text style={styles.title}>{item.title}</Text>
            <BlurView style={styles.bottomContainer} intensity={40} tint="dark">
              <View style={styles.infoContainer}>
                <Text style={styles.rating}>⭐ {item.chef.rating}</Text>
                <View style={styles.chefContainer}>
                  <Image source={{ uri: item.chef.avatar }} style={styles.chefAvatar} />
                  <Text style={styles.chefName}>{item.chef.name}</Text>
                </View>
              </View>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    marginVertical: 15,
  },
  wrapper: {
    height: 220,
  },
  card: {
    width: width * 0.85,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "center",
    elevation: 4,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    left: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  chefContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chefName: {
    fontSize: 12,
    color: "white",
    marginLeft: 6,
  },
  chefAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "white",
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});

export default FoodCarousel;
