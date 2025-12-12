
import { create } from 'zustand';

type LoadingState = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

// This Zustand store manages a simple boolean `isLoading` state.
// It can be accessed and modified from any client component.
export const useLoading = create<LoadingState>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}));
