import { create } from "zustand";
import { IDelivery, ISlogan } from "../interfaces";

interface IDeliveryStore extends IDelivery {
  setSlogan: (slogan: ISlogan) => void;
  setCourse: (course: string) => void;
  setDeliveryTitle: (deliveryTitle: string) => void;
  setDeliveryDescription: (deliveryDescription: string) => void;
  reset: () => void;
  getState: () => IDelivery;
  deleteSlogan: (index: number) => void;
}


export const useDeliveryStore = create<IDeliveryStore>((set, get) => ({
  course: "",
  deliveryTitle: "",
  deliveryDescription: "",
  slogans: [],
  setSlogan: (slogan: ISlogan) => set(state => ({ slogans: [...state.slogans, slogan] })),
  setCourse: (course: string) => set({ course }),
  setDeliveryTitle: (deliveryTitle: string) => set({ deliveryTitle }),
  setDeliveryDescription: (deliveryDescription: string) => set({ deliveryDescription }),
  reset: () => set({ course: "", deliveryTitle: "", slogans: [] }),
  deleteSlogan: (index: number) => set(({ slogans }) => ({
    slogans: slogans.filter(slogan => slogan.description !== slogans[index].description)

  })),
  getState: () => get()
}))