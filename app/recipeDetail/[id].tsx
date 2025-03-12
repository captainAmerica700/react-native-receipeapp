import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Bookmark } from "lucide-react-native";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import foodData from "@/src/constants/foodData";
const RecipeDetailComponent = () => {
  const { id } = useLocalSearchParams();
  const data = foodData.filter((item) => item.id === Number(id));
  return (
    <SafeAreaView style={styles.container}>
      {data.map((item) => (
        <View style={styles.container1}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: `${item.imageUrl}`,
            }}
          >
            {/* <LinearGradient
        colors={["transparent", "rgba(21, 15, 15, 0.5)"]}
        style={styles.overlay}
      /> */}
          </ImageBackground>
          <View
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BlurView style={styles.bottomContainer} intensity={30} tint="dark">
              <View style={styles.infoContainer}>
                <View style={styles.chefContainer}>
                  <Image
                    source={{ uri: "item.chef.avatar" }}
                    style={styles.chefAvatar}
                  />
                  <Text style={styles.chefName}>{item.chef.name} </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Follow +</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
            <View style={styles.foodContainer}>
              <View style={styles.foodtitle}>
                <Text style={styles.foodtext}>{item.title}</Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#25AE87"
                  stroke="#25AE87"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.ingredients}>
                <Text style={styles.foodtext}>
                  Ingredients{" "}
                  <Text style={{ color: "#25AE87", fontSize: 10 }}>(12)</Text>
                </Text>
                <View style={{ height: 130, padding: 10 }}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {item.ingredients.map((item) => (
                      <View key={item.id} style={styles.ingredientItem}>
                        <Image
                          source={{ uri: item.image }}
                          style={styles.ingredientImage}
                        />

                        <Text style={styles.ingredientText}>{item.name}</Text>

                        <Text style={styles.ingredientQuantity}>
                          {item.quantity}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    //  position: "absolute",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%", // Covers the full image
    display: "flex",
    alignSelf: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    position: "absolute",
    top: 10,
    left: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  button: {
    fontWeight: "normal",
    backgroundColor: "#25AE87",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  chefContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chefName: {
    fontSize: 14,
    color: "white",
    marginLeft: 6,
    fontWeight: "bold",
  },
  chefAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "white",
  },
  foodContainer: {
    position: "absolute",
    top: -25,
    padding: 19,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#f7f7f7",
    width: "100%",
  },
  foodtitle: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  foodtext: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    color: "#8d8f8e",
    fontSize: 12,
  },
  ingredients: {
    marginTop: 20,
    color: "#8d8f8e",
    fontSize: 12,
  },
  ingredientItem: {
    flexDirection: "row", // ✅ Align Image, Name, and Quantity in a row
    alignItems: "center",
    justifyContent: "space-between", // ✅ Space between elements
    paddingRight: 15,
    shadowColor: "#a8a8a8",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  ingredientImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // ✅ Circular image
  },
  ingredientText: {
    fontSize: 14,
    flex: 1, // ✅ Allows text to take full width in the middle
    textAlign: "center",
  },
  ingredientQuantity: {
    fontSize: 12,
    color: "#25AE87",
    fontWeight: "bold",
  },
});
export default RecipeDetailComponent;
