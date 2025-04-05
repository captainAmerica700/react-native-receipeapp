import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; // or any other icon library you prefer

interface MenuProps {
  Menulist: string[];
}

const Menu = ({ Menulist }: MenuProps) => {
  // Map menu items to corresponding icons
  const getIcon = (item: string) => {
    switch (item.toLowerCase()) {
      case 'account':
        return <AntDesign name="user" size={10} color="#A9A9A9" />;
      case 'setting':
        return <Ionicons name="settings" size={10} color="#A9A9A9" />;
      case 'saved':
        return <Ionicons name="bookmark" size={10} color="#A9A9A9" />;
      case 'signout':
        return <Ionicons name="log-out" size={10} color="#A9A9A9" />;
      case 'Upload Recipe':
        return <AntDesign name="upload" size={10} color="#A9A9A9" />;
      default:
        return <AntDesign name="upload" size={10} color="#A9A9A9" />;
    }
  };

  return (
    <View style={styles.container}>
      {Menulist.map((item: string, index: number) => (
        <React.Fragment key={item}>
          <Link href={`/`} style={styles.menuItem}>
            <View style={styles.iconContainer}>{getIcon(item)}</View>
            <Text style={styles.title}>{item}</Text>
          </Link>
          {index < Menulist.length - 1 && <View style={styles.separator} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 4,
  },
  iconContainer: {
    marginRight: 12,
    width: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#A9A9A9',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 30, // Align with text (icon width + margin)
  },
});

export default Menu;
