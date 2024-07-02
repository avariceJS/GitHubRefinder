// Zustand
import { create } from 'zustand'

// Interfaces
import { State } from './interfaces'

/**
 * Zustand store for managing query and pagination state.
 *
 * @returns  query: Current search query string,
 * @returns  page: Current page number,
 * @returns  setQuery: Function to update search query,
 * @returns  setPage: Function to update current page number,
 *
 */
const useStore = create<State>(set => ({
	query: '',
	page: 1,
	setQuery: query => set({ query }),
	setPage: page => set({ page }),
}))

export default useStore
