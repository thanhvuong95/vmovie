import create from "zustand";
import { StoreType, User } from "../shared/type";

const store = create<StoreType>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
export default store;
