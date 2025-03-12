import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import SpotlightComponent from "./Spotlight";
import TrendingComponent from "./Trending";

const SlideHomeComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SpotlightComponent />
        <TrendingComponent />
        <TrendingComponent />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 15, // Prevent content from getting cut off
  },
});

export default SlideHomeComponent;
