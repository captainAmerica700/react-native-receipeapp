import React from 'react'
import SearchBar from "@/src/StaticComponents/Home/SearchBar";
import SpotlightComponent from "@/src/StaticComponents/Home/Spotlight";
import TrendingComponent from "@/src/StaticComponents/Home/Trending";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const VeganComponent = () => {
  return (
   <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover Best Recipes</Text>
          <Image
            source={require("@/assets/images/men.jpg")}
            style={styles.image}
          />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <SearchBar />
        </View>
        <View>
          <View style={{ flex: 0.7 }}>
            <ScrollView
              style={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <SpotlightComponent />
              <TrendingComponent />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow SafeAreaView to take full screen
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#25AE87",
    fontWeight: "bold",
    fontSize: 26,
    width: "60%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  scrollContent: {
    paddingBottom: 30, // Prevent content from getting cut off
  },
});
export default VeganComponent