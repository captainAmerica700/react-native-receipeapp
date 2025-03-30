import Button from '@/src/components/button';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const UserComponent = () => {
  return (
    <View>
      <Image></Image>
      <View>
        <Text>chefName</Text>
        <Text>recipe</Text>
      </View>
      <Button>
        <Ionicons name="arrow-back" size={19} color="white" />
      </Button>
    </View>
  );
};

export default UserComponent;
