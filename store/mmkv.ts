import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

// Define types for keys and values
type StorageKey = string;
type StorageValue = string | number | boolean;

// Helper functions for MMKV
export const setItem = (key: StorageKey, value: StorageValue): void => {
  if (typeof value === "string") {
    storage.set(key, value);
  } else if (typeof value === "number") {
    storage.set(key, value);
  } else if (typeof value === "boolean") {
    storage.set(key, value);
  }
};

export const getItem = (key: StorageKey): string | null |undefined => storage.getString(key);

export const removeItem = (key: StorageKey): void => storage.delete(key);
