import React, { ComponentType, ReactNode, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import ProfileCard from './Home/ProfileInfo/ProfileCard';
import foodData from '../constants/foodData';

interface RenderComponentProps {
  Component: ComponentType;
}

const RenderComponent: React.FC<RenderComponentProps> = ({ Component }) => {
  return (
    <SafeAreaView
    >
      <View>
        <Component />
      </View>
    </SafeAreaView>
  );
};

interface UsertabsProps {
  children?: ReactNode;
}

const Usertabs = ({ children }: UsertabsProps) => {
  const data = [
    {
      id: 1,
      title: 'Recipe',
      component: Recipe,
    },
    {
      id: 2,
      title: 'Video',
      component: Video,
    },
    {
      id: 3,
      title: 'Tag',
      component: Tag,
    },
    {
      id: 4,
      title: 'Favourite',
      component: Favourite,
    },
  ];
  const [activeTab, setActiveTab] = useState('Recipe');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabsContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.tabWrapper}>
            <Pressable
              onPress={() => setActiveTab(item.title)}
              style={[
                styles.tab,
                activeTab === item.title && { backgroundColor: '#0fba37' },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  activeTab === item.title && { color: 'white' },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>

      {/* Center content */}
      <View style={styles.contentWrapper}>
        {data.map(
          (item) =>
            activeTab === item.title && (
              <RenderComponent key={item.id} Component={item.component} />
            ),
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  text: {
    color: '#0fba37',
    textAlign: 'center',
    marginVertical: 8,
  },
  tabWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  tab: {
    backgroundColor: '#f7f7f7',
    height: 40,
    width: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center', // Center tabs horizontally
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginTop: 20, // Space between tabs and content
  },
});

export const Recipe = () => {
  return (<ScrollView  showsVerticalScrollIndicator={false} style={{marginBottom:-100}}><ProfileCard data={foodData}/></ScrollView>);
};
export const Video = () => {
  return <Text style={{color:'black'}}>this is the Video Component</Text>;
};
export const Tag = () => {
  return <Text style={{color:'black'}}>this is the Tag Component</Text>;
};
export const Favourite = () => {
  return <Text style={{color:'black'}}>this is the Favourite Component</Text>;
};

export default Usertabs;
