import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: object;
}
const   Button = ({ style, children, onPress, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest} style={style}>
      <Text
        style={{
          color: '#fff',
          display: 'flex',
          alignSelf: 'center',
          fontWeight: '600',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
