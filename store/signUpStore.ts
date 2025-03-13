import { create } from 'zustand';
import { useEffect } from 'react';

const TOKEN_KEY = 'tokanData';

interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useSignUpAuth = create<AuthStore>((set) => ({
  token: null,
  isAuthenticated: false,

  setToken: (token: string) => {
    set((state) => ({ ...state, token, isAuthenticated: true }));  // ✅ No direct mutation
  },

  clearToken: () => {
    set((state) => ({ ...state, token: null, isAuthenticated: false }));  // ✅ No direct mutation
  },
}));

export default useSignUpAuth;
