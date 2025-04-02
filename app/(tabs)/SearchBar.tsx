import React, { useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import foodData from '@/src/constants/foodData';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '@/src/ReusableComponent/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { Loader } from '@/src/utils/Loader';
const SearchBar = () => {
  // const [query, setQuery] = useState<Number | null>();
  const [val, setVal] = useState('');
  const filteredData = foodData.filter((item) => {
    return item.title.toLowerCase().includes(val.toLowerCase());
  });
  const { data, loading, error } = Loader(() => filteredData, 1000);

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#25AE87" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback>
        <TextInput
          placeholder="... Search here"
          style={styles.SearchBar}
          onChangeText={(text) => setVal(text)}
          value={val}
        />
      </TouchableWithoutFeedback>
      <View style={{ position: 'relative' }}>
        {data && filteredData.length > 0 && (
          <FlatList
            style={styles.resultsContainer}
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.resultItem}>
                <Link href={`/recipeDetail/${item.id}`}>
                  <Text
                    style={{
                      fontSize: 10,
                      backgroundColor: '#ACD3A8',
                      color: 'white',
                      width: '100%',
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                </Link>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <ScrollView contentContainerStyle={styles.CardContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {filteredData.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.cardContainer,
                index % 2 === 0 ? styles.leftCard : styles.rightCard,
              ]}
            >
              <Link href={`/recipeDetail/${item.id}`}>
                <Card
                  imageUrl={item.imageUrl}
                  title={item.title}
                  rating={item.chef.rating}
                  avatar={item.chef.avatar}
                  name={item.chef.name}
                />{' '}
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  SearchBar: {
    padding: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    fontSize: 12,
    // outline: "none",
    borderColor: '#e5e7e0',
    borderWidth: 1,
  },
  resultsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 3,
    // shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'absolute',
    width: 300,
    height: 'auto',
    left: -150,
    top: -10,
    maxHeight: 50,
  },
  resultItem: {
    padding: 8,
    backgroundColor: '#f3f4f1',
    borderBottomColor: '#e5e7e0',
    borderBottomWidth: 1,
  },
  CardContainer: {
    padding: 8,
    marginTop: 35,
  },
  cardContainer: {
    width: '48%', // Leaves some space between cards
    marginBottom: 16,
  },
  leftCard: {
    marginRight: '2%',
  },
  rightCard: {
    marginLeft: '2%',
  },
});
export default SearchBar;
