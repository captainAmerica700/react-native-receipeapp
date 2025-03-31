import { BlurView } from 'expo-blur';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import foodData from '@/src/constants/foodData';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useFollowStore from '@/store/FollowStore';
import Toast from 'react-native-toast-message';
import { Svg, Path } from 'react-native-svg';

interface filteredData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  chef: {
    name: string;
    avatar: string;
    rating: number;
  };
  ingredients: {
    id: number;
    name: string;
    quantity: string;
    image: any;
  }[];
}
const RecipeDetailComponent = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<filteredData | null>(null);
  const { follow, chefName, setFollow } = useFollowStore();
  const [loading, setLoading] = useState(true);
  const handleFollow = (item: string) => {
    if (item === chefName) {
      setFollow(0, '');
      Toast.show({
        type: 'success', // This will style it as a success message
        position: 'top', // You can change the position to 'top', 'bottom', or 'center'
        text1: 'Success', // Main message
        text2: 'Your follow successfully!', // Sub-message (optional)
      });
    } else {
      setFollow(1, item);
    }
  };
  useEffect(() => {
    // Simulate a slight delay to show the loader
    setTimeout(() => {
      const filteredData = foodData.find((item) => item.id === Number(id));
      setData(filteredData || null);
      setLoading(false);
    }, 1000); // Simulated delay
  }, [id]);
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#25AE87" />
      </SafeAreaView>
    );
  }
  return (

    <SafeAreaView style={styles.container}>
      {data && (
        <View key={data.id} style={styles.container1}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: data.imageUrl,
            }}
          >
            <View style={{ position: 'absolute', padding: 15, top: 50 }}>
              <Ionicons
                name="arrow-back"
                size={28}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BlurView style={styles.bottomContainer} intensity={40} tint="dark">
              <View style={styles.infoContainer}>
                <View style={styles.chefContainer}>
                  <Image
                    source={{ uri: data.chef.avatar }}
                    style={styles.chefAvatar}
                  />
                  <Text style={styles.chefName}>{data.chef.name} </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.button,
                    data.chef.name === chefName ? null : styles.activebutton,
                  ]}
                  onPress={() => handleFollow(data.chef.name)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      data.chef.name === chefName ? styles.activeText : null,
                    ]}
                  >
                    {follow ? `Follow +` : `Followed`}
                  </Text>
                </TouchableOpacity>
              </View>
            </BlurView>
            <View style={styles.foodContainer}>
              <View style={styles.foodtitle}>
                <Text style={styles.foodtext}>{data.title}</Text>
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none" // You can use fill="none" if you do not want a fill
                  stroke="#25AE87"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </Svg>
              </View>
              <Text style={styles.description}>{data.description}</Text>
              <View style={styles.ingredients}>
                <Text style={styles.foodtext}>
                  Ingredients
                  <Text style={{ color: '#25AE87', fontSize: 10 }}>(12)</Text>
                </Text>
                <View style={{ height: 160, padding: 10 }}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data.ingredients.map((data) => (
                      <View key={data.id} style={styles.ingredientItem}>
                        {/* <Image
                          source={{ uri: item.image }}
                          style={styles.ingredientImage}
                        /> */}

                        <Text style={styles.ingredientText}>{data.name}</Text>

                        <Text style={styles.ingredientQuantity}>
                          {data.quantity}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f7f7f7'
  },
  container1: {
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'relative',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    //  position: "absolute",
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%', // Covers the full image
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    fontWeight: 'normal',
    backgroundColor: '#25AE87',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  chefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chefName: {
    fontSize: 14,
    color: 'white',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  chefAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  foodContainer: {
    position: 'absolute',
    top: -25,
    padding: 19,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#f7f7f7',
    width: '100%',
  },
  foodtitle: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  foodtext: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    color: '#8d8f8e',
    fontSize: 12,
  },
  ingredients: {
    marginTop: 40,
    color: '#8d8f8e',
    fontSize: 12,
  },
  ingredientItem: {
    flexDirection: 'row', // ✅ Align Image, Name, and Quantity in a row
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ Space between elements
    padding: 15,
    shadowColor: '#a8a8a8',
    backgroundColor: '#fff',
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
    textAlign: 'center',
  },
  ingredientQuantity: {
    fontSize: 12,
    color: '#25AE87',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
  activebutton: {
    backgroundColor: 'black',
  },
});
export default RecipeDetailComponent;
