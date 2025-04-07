import React from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type InputMode = 'text' | 'textarea';

interface TextInputFieldProps extends Omit<TextInputProps, 'style'> {
  /** Input mode - 'text' for single line, 'textarea' for multiline */
  mode?: InputMode;
  /** Current value of the input */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error message to display below input */
  error?: string;
  /** Custom style for the container */
  containerStyle?: StyleProp<ViewStyle>;
  /** Custom style for the input */
  inputStyle?: StyleProp<TextStyle>;
  /** Custom style for the error text */
  errorStyle?: StyleProp<TextStyle>;
  /** Placeholder text color */
  placeholderTextColor?: string;
  /** Whether to show a character counter */
  showCharacterCounter?: boolean;
  /** Maximum length when character counter is shown */
  maxLength?: number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  mode = 'text',
  value = '',
  placeholder,
  error,
  containerStyle,
  inputStyle,
  errorStyle,
  placeholderTextColor = '#D5D5D5',
  showCharacterCounter = false,
  maxLength,
  onChangeText,
  ...rest
}) => {
  const isTextArea = mode === 'textarea';
  const characterCount = value?.length || 0;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        multiline={isTextArea}
        numberOfLines={isTextArea ? 4 : 1}
        textAlignVertical={isTextArea ? 'top' : 'center'}
        style={[
          styles.input,
          isTextArea && styles.textArea,
          error && styles.errorInput,
          inputStyle,
        ]}
        maxLength={maxLength}
      />
      
      {(error || (showCharacterCounter && maxLength)) && (
        <View style={styles.bottomContainer}>
          {error && (
            <Text style={[styles.errorText, errorStyle]}>
              {error}
            </Text>
          )}
          {showCharacterCounter && maxLength && (
            <Text style={styles.counterText}>
              {characterCount}/{maxLength}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  errorInput: {
    borderColor: 'red',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    flex: 1,
  },
  counterText: {
    color: '#888',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default TextInputField;