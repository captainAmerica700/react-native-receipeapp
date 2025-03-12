import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const SpotlightComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Just For You</Text>

      {/* Wrap Image and Gradient Together */}
      <ImageBackground
        source={require("../../../assets/images/spotlight.jpg")}
        style={styles.imageWrapper}
      >
        {/* Overlay Gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)", "rgb(0, 0, 0)"]}
          style={styles.overlay}
        />

        {/* Text positioned at the bottom */}
        <View style={styles.textContainer}>
          <Text style={styles.imageText}>
            15 Best Pasta Recipes from Chef John
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  imageWrapper: {
    width: "100%",
    height: 157,
    borderRadius: 10,
    marginTop: 10,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    padding: 10,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%", // Covers the full image
    display: "flex",
    alignSelf: "center",
  },
  imageText: {
    fontSize: 15,
    fontWeight: "500",
    width: "100%",
    height: "100%",
    color: "#fff",
  },
  textContainer:{
    position: "absolute",
    bottom: 10, // Adjusts text position
    left: 10,
    right: 10,
  }
});

export default SpotlightComponent;
