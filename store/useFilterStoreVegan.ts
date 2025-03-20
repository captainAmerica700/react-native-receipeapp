import { create } from 'zustand';

interface FilterstoreStore {
filter:string;
setFilter:(val:string)=>void;
}

const useFilterStore = create<FilterstoreStore>((set) => ({
  filter: '',
  setFilter: (val: string) => set({ filter: val }),
}));

export default useFilterStore;
