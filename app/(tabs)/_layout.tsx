import "react-native-reanimated"; // Ensure this is the first import
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="Vegan"
      screenOptions={{
        tabBarActiveTintColor: "#25AE87",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          position: "fixed",
          bottom: 0,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Vegan"
        options={{
          title: "Vegan",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cow-off" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Healthy"
        options={{
          title: "Healthy",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-apple" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="FastFood"
        options={{
          title: "Fast Food",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cuisine"
        options={{
          title: "Cuisine",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />
          ),
        }}
      />
      {/* Ensure there's a matching not-found screen */}
      <Tabs.Screen name="+not-found" />
    </Tabs>
  );
}
