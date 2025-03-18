import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

interface Props {
  placeholder: string;
  value?: string;
  error?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const TextInputField: React.FC<Props> = ({
  placeholder,
  value,
  error,
  secureTextEntry = false,
  onChangeText,
}) => (
  <View style={{ marginBottom: 10 }}>
    <TextInput
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={[styles.input, error && { borderColor: 'red' }]}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
  error: { color: 'red', marginTop: 5 },
});

export default TextInputField;
