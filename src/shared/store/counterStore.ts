import { create } from "zustand"

interface CounterState {
  count: number;
  increment: () => void;
  array: number[];
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  array: [],
  increment: () => set(state => ({
    ...state,
    count: state.count + 1,
    array : [...state.array, 1]
  }))

}))

