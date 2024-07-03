export interface SearchRepositoriesData {
	search: {
		edges: Array<{
			node: {
				url: string
				name: string
				owner: {
					login: string
				}
				stargazerCount: number
				updatedAt: string
			}
		}>
	}
}

export interface RepositoriesListProps {
	data: SearchRepositoriesData | undefined
}
