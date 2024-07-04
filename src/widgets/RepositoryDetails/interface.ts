export interface Repository {
	name: string
	stargazerCount: number
	updatedAt: string
	owner: {
		login: string
		avatarUrl: string
	}
	languages: {
		edges: {
			node: {
				name: string
			}
		}[]
	}
	description: string
}

export interface RepositoryDetailsProps {
	repository: Repository
}

export interface ErrorProps {
	message: string
}

export interface LanguagesListProps {
	languages: {
		edges: {
			node: {
				name: string
			}
		}[]
	}
}

export interface OwnerInfoProps {
	owner: {
		login: string
		avatarUrl: string
	}
}
