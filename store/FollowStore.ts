import { create } from 'zustand';
interface FollowStore {
  follow: number;
  chefName: string;
  setFollow: (FollowVal:number,val: string) => void;
}
const useFollowStore = create<FollowStore>((set) => ({
  follow: 0,
  chefName: '',
  setFollow: (FollowVal:number,val: string) =>
    set(() => ({ follow: FollowVal, chefName: val })),
}));

export default useFollowStore;
