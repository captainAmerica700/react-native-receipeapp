import { create } from 'zustand';
import { getItem, removeItem, setItem } from './mmkv';
import { useEffect } from 'react';

const TOKEN_KEY = 'authToken';

interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  isAuthenticated: false,

  setToken: (token: string) => {
    setItem(TOKEN_KEY, token);
    set((state) => ({ ...state, token, isAuthenticated: true }));  // ✅ No direct mutation
  },

  clearToken: () => {
    removeItem(TOKEN_KEY);
    set((state) => ({ ...state, token: null, isAuthenticated: false }));  // ✅ No direct mutation
  },
}));

export default useAuthStore;
