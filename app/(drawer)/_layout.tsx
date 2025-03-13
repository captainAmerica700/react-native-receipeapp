import "react-native-reanimated"; // Ensure this is the first import
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: "#0fba37",
        drawerInactiveTintColor: "#666",
        drawerStyle: {
          backgroundColor: "white",
        },
        headerShown: true, // Show header for navigation
      }}
    >
      <Drawer.Screen name="settings" options={{ title: "Settings" }} />
      <Drawer.Screen name="services" options={{ title: "Services" }} />
      
    </Drawer>
  );
}
