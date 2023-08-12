
import { create } from 'zustand';
import { ISlogan } from '../interfaces';

export interface IEvaluationStore extends ISlogan {
  setDescription: (description: string) => void;
  setStatus: (status: "realized" | "incomplete" | "not realized") => void;
  setComment: (comment: string) => void;
  reset: () => void;
  getState: () => ISlogan;
}

export const useEvaluationStore = create<IEvaluationStore>((set, get) => ({
  description: '',
  status: 'not realized',
  comment: '',
  setDescription: (description: string) => set({ description }),
  setStatus: (status: "realized" | "incomplete" | "not realized") => set({ status }),
  setComment: (comment: string) => set({ comment }),
  reset: () => set({ description: '', status: 'not realized', comment: '' }),
  getState: () => get()
}));
