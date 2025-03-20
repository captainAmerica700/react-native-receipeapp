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
    set((state) => {
    const NewState=  { ...state, token, isAuthenticated: true }
    console.log('this is the new state we are using the store', NewState);
    return NewState
    }); // ✅ No direct mutation
    
  },

  clearToken: () => {
    set((state) => {
      const NewState = { ...state, token: null, isAuthenticated: false }
      console.log('this is the new state after the user logs out', NewState);
      return NewState
    }); // ✅ No direct mutation
  },
}));

export default useSignUpAuth;
