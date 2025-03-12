import Button from "@/src/components/button";
import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
export default function AppEntryComponent() {
  const router = useRouter();
  const onPress = () => {
    router.push("/Vegan");
  };
  return (
    <SafeAreaView style={{ position: "relative" }}>
      <ImageBackground
        source={require("../assets/images/mainimage.svg")}
        style={styles.imageBackground}
      ></ImageBackground>
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.8)", "rgb(0, 0, 0)"]}
        style={styles.overlay}
      />

      <View style={styles.container}>
        <Text style={styles.MainText}>Recipe Book</Text>
        <Text style={styles.subText}>Excellent recipe at your fingertips</Text>
        <Button style={styles.button} onPress={onPress}>
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.1,
  },
  // Overlay to create the fade effect
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%", // 0.5 from the top,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 250,
    shadowColor: "#000",
  },
  MainText: {
    fontSize: 27,
    fontWeight: "500",
    marginTop: 10,
    color: "white",
  },
  subText: {
    fontSize: 12,
    fontWeight: "300",
    marginTop: 6,
    color: "white",
  },
  button: {
    backgroundColor: "#25AE87",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    outline: "none",
  },
});
