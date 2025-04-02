import React, { useState } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import foodData from '@/src/constants/foodData';
import { Link } from 'expo-router';
const SearchBar = () => {
  // const [query, setQuery] = useState<Number | null>();
  const [data, setData] = useState('');
  const filteredData = foodData.filter((item) =>
    item.title.toLowerCase().includes(data.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <TextInput
          placeholder="... Search here"
          style={styles.SearchBar}
          onChangeText={(text) => setData(text)}
          value={data}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  SearchBar: {
    padding: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    fontSize: 12,
    // outline: "none",
    marginTop: 10,
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
});
export default SearchBar;
