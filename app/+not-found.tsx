import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen name="+not-found" />
      <MaterialIcons name="error-outline" size={50} color="red" />
      <Text style={styles.text}>Page Not Found</Text>
      <Link href={'/AppEntryPage'} style={styles.link}>
        Go to App Entry Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
});
