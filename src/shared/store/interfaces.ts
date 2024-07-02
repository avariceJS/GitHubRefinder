export interface State {
	query: string
	page: number
	setQuery: (query: string) => void
	setPage: (page: number) => void
}
