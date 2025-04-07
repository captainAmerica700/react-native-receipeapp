import Button from '@/src/components/button';
import TextInputField from '@/src/components/TextInputField';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import foodData from '@/src/constants/foodData';
// Define reusable input fields
const RecipeInputField = ({ label, placeholder, onChangeText }: { label: string; placeholder: string; onChangeText: (text: string) => void }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInputField placeholder={placeholder} onChangeText={onChangeText} />
  </>
);

const UploadRecipe = () => {
  const handleTextChange = (text: string) => {
    // Implement your state or functionality here for handling text input
    console.log(text);
  };
const[category,setCategory] = useState('')
const handleCategoryChange = (value:string)=>{
  setCategory(value)
}
  return (
    <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={true} >
      {/* <Text style={styles.text}>Upload Recipe</Text> */}
      <View style={styles.box}>
        <Ionicons name="cloud-upload-outline" size={24} color="black" />
        <Text style={styles.dropText}>Click & Upload Recipe Image</Text>
      </View>
      
      {/* Form Fields */}
      <RecipeInputField 
        label="Recipe Name:" 
        placeholder="Enter Recipe name here" 
        onChangeText={handleTextChange} 
      />
      
      <RecipeInputField 
        label="Recipe Description:" 
        placeholder="Enter Recipe description here" 
        onChangeText={handleTextChange} 
      />
      
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={category}
        onValueChange={handleCategoryChange}
        style={styles.picker}
      >
        {foodData.map(item=>(
          <Picker.Item key={item.id} label={item.category} value={item.category}/>
        ))}
        
      </Picker>
      
      <RecipeInputField 
        label="Ingredients:" 
        placeholder="Enter ingredients here" 
        onChangeText={handleTextChange} 
      />
      
      <RecipeInputField 
        label="Servings:" 
        placeholder="Enter servings here" 
        onChangeText={handleTextChange} 
      />
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button style={styles.cancelButton}>Cancel</Button>
        <Button style={styles.uploadButton}>Upload</Button>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: '#ffffff',
    height:'100%'
  },
  text: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  dropText: {
    color: '#484848',
    textAlign: 'center',
    fontSize: 12,
  },
  box: {
    borderColor: '#D5D5D5',
    padding: 28,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    marginVertical: 30,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20, // Added margin to give space between picker and next field
  },
  cancelButton: {
    borderColor: '#D5D5D5',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    color: '#000',
  },
  uploadButton: {
    backgroundColor: '#1677FF',
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
});

export default UploadRecipe;
