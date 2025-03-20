import useFilterStore from '@/store/useFilterStoreVegan';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TrendingMenu = () => {
  const { filter, setFilter } = useFilterStore();
  const HandlePress = (item: string) => {
    item === filter ? setFilter('') : setFilter(item);
  };
  return (
    <ScrollView
      style={styles.scrollview}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {[
        'Appetizers & Snacks',
        'Breakfast',
        'Soups',
        'Salads',
        'Main Courses',
        'Baked Goods',
        'Desserts',
        'Drinks & Beverages',
        'Vegetarian/Vegan',
        'Pasta & Noodles',
        'Healthy & Low-Calorie',
        'Sandwiches & Wraps',
        'side dish',
      ].map((item: string) => (
        <TouchableOpacity key={item} onPress={() => HandlePress(item)}>
          <View
            style={[styles.container, filter === item ? styles.active : null]}
          >
            <Text
              style={[styles.Text, filter === item ? styles.activetext : null]}
            >
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 5,
    borderColor: '#85E6C5',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 5,
    overflow: 'hidden',
    height: 19,
  },
  Text: {
    color: '#000',
    fontSize: 10,
    paddingVertical: 1,
  },
  scrollview: {
    width: '100%',
    height: 28,
    // marginVertical:5
  },
  active: {
    backgroundColor: '#85E6C5',
  },
  activetext: {
    color: 'white',
  },
});

export default TrendingMenu;
