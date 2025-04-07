import React from 'react';
import { Text, TouchableOpacity, StyleProp, TextStyle, StyleSheet } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}
const Button = ({ style, children, onPress, ...rest }: ButtonProps) => {
  const flattenedStyle = StyleSheet.flatten(style) || {};
  const textColor = flattenedStyle.color || '#FFFFFF';
  return (
    <TouchableOpacity onPress={onPress} {...rest} style={style}>
      <Text
        style={[
          {
            color: textColor, // Apply the dynamic text color
            display: 'flex',
            alignSelf: 'center',
            fontWeight: '600',
          },
          // Additional styles can be added here as needed
        ]}
        {...rest}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
