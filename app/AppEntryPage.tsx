import { Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppEntryComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/128/15567/15567971.png",
        }}
      />
      <Text style={styles.MainText}>Recipe Book</Text>
      <Text style={styles.subText}>Excellent recipe at your fingertips</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
  },
  MainText: {
    fontSize: 27,
    fontWeight: "500",
    marginTop: 10,
    color:'white'
  },
  subText: {
    fontSize: 12,
    fontWeight: "300",
    marginTop: 6,
    color:'white'
  },
  image:{
    width:100,
    height:100
  }

});
