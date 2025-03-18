import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// Define types for keys and values
type StorageKey = string;
type StorageValue = string | number | boolean;

// Helper functions for MMKV
export const setItem = (key: StorageKey, value: StorageValue): void => {
  if (typeof value === 'string') {
    storage.set(key, value);
  } else if (typeof value === 'number') {
    storage.set(key, value);
  } else if (typeof value === 'boolean') {
    storage.set(key, value);
  }
};

export const getItem = (key: StorageKey): string | null => {
  const storedValue = storage.getString(key);
  if (!storedValue) return null;

  try {
    const parsedData = JSON.parse(storedValue);
    console.error(' parsedData parsing MMKV data:', parsedData);
    // Extract the token dynamically (handling varying key names)
    const sessionKey = Object.keys(parsedData)[0]; // Get first key
    return parsedData[sessionKey]; // Return the actual token value
  } catch (error) {
    console.error('❌ Error parsing MMKV data:', error);
    return null;
  }
};

export const removeItem = (key: StorageKey): void => storage.delete(key);
