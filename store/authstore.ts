import { create } from 'zustand';
import { getItem, removeItem, setItem } from './mmkv';
const TOKEN_KEY = 'authToken';

const useAuthStore = create((set) => ({
  token: getItem(TOKEN_KEY) || null,
  isAuthenticated: !!getItem(TOKEN_KEY),

  setToken: (token:string) => {
    setItem(TOKEN_KEY, token);
    set({ token, isAuthenticated: true });
  },

  clearToken: () => {
    removeItem(TOKEN_KEY);
    set({ token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
