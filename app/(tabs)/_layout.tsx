import 'react-native-reanimated'; // Ensure this is the first import
import { Tabs, useRouter } from 'expo-router';
import {MaterialCommunityIcons } from '@expo/vector-icons';


export default function TabsLayout() {
  const router = useRouter()
  return (
    <Tabs
      initialRouteName="Vegan"
      screenOptions={{
        tabBarActiveTintColor: '#0fba37',
        tabBarInactiveTintColor: '#e0e0e0',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Vegan"
        options={{
          title: 'Vegan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cow-off" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Healthy"
        options={{
          title: 'Healthy',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-apple"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="FastFood"
        options={{
          title: 'Fast Food',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cuisine"
        options={{
          title: 'Cuisine',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipeDetail/[id]"
        options={{
          href: null,
          title: 'recipeDetail',
        }}
      />
      <Tabs.Screen
        name="Information"
        options={{
          href: null,
          title: 'Profile',
        }}
      />
       <Tabs.Screen
        name="SearchBar"
        options={{
          title: 'Search',
          headerShown: true,
          headerTitleAlign: 'center',
          href: null,
        }}
      />
    </Tabs>
  );
}
