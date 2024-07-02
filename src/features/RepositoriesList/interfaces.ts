export interface Node {
	url: string
	owner: {
		login: string
	}
	name: string
	stargazerCount: number
	updatedAt: string
}

export interface SearchRepositoriesData {
	search: {
		pageInfo: {
			endCursor: string | null
			startCursor: string | null
		}
		edges: { node: Node }[]
	}
}

export interface RepositoriesListProps {
	data: SearchRepositoriesData | undefined
}
