import { create } from "zustand";
import { IDelivery, ISlogan } from "../interfaces";

interface IDeliveryStore extends IDelivery {
  setSlogan: (slogan: ISlogan) => void;
  setCourse: (course: string) => void;
  setDeliveryTitle: (deliveryTitle: string) => void;
  reset: () => void;
  getState: () => IDelivery;
}


export const useDeliveryStore = create<IDeliveryStore>((set, get) => ({
  course: "",
  deliveryTitle: "",
  slogans: [],
  setSlogan: (slogan: ISlogan) => set(state => ({ slogans: [...state.slogans, slogan] })),
  setCourse: (course: string) => set({ course }),
  setDeliveryTitle: (deliveryTitle: string) => set({ deliveryTitle }),
  reset: () => set({ course: "", deliveryTitle: "", slogans: [] }),
  getState: () => get()
}))