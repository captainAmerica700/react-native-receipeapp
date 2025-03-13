import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/src/StaticComponents/Home/SearchBar";
import SpotlightComponent from "@/src/StaticComponents/Home/Spotlight";
import TrendingComponent from "@/src/StaticComponents/Home/Trending";
import { account } from "@/appwriteConfig";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import useSignUpAuth from "@/store/signUpStore";
const { height } = Dimensions.get("window");
const FastFood = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Discover FastFood Recipes</Text>
      </View>

      {/* Search Bar */}
      <View style={{ paddingBottom: 20 }}>
        <SearchBar />
      </View>

      {/* Scrollable Content */}
      <View>
        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <SpotlightComponent />
          <TrendingComponent />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 10,
    height:height * 0.6
  },
});

export default FastFood;
