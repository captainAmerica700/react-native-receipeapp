import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="... Search here" style={styles.SearchBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  
  SearchBar: {
    padding: 10,
    height: 50,
    width: "100%",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    fontSize:12,
    outline:'none',
    marginTop:10,
  },
  
});
export default SearchBar;
