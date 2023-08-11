
import { create } from 'zustand';
import { ISlogan } from '../interfaces';

export interface ISloganStore extends ISlogan {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setStatus: (status: "realized" | "incomplete" | "not realized") => void;
  setComment: (comment: string) => void;
  reset: () => void;
  getState: () => ISlogan;
}

export const useSloganStore = create<ISloganStore>((set, get) => ({
  title: '',
  description: '',
  status: 'not realized',
  comment: '',

  setTitle: (title: string) => set({ title }),
  setDescription: (description: string) => set({ description }),
  setStatus: (status: "realized" | "incomplete" | "not realized") => set({ status }),
  setComment: (comment: string) => set({ comment }),
  reset: () => set({ title: '', description: '', status: 'not realized', comment: '' }),
  getState: () => get()
}));
