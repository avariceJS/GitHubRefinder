import { create } from 'zustand';

interface State {
  query: string;
  page: number;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
}

const useStore = create<State>((set) => ({
  query: '',
  page: 1,
  setQuery: (query) => set({ query }),
  setPage: (page) => set({ page }),
}));

export default useStore;
