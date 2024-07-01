import { gql } from '@apollo/client'

export const SEARCH_REPOSITORIES = gql`
	query SearchRepositories($query: String!, $first: Int!, $after: String) {
		search(query: $query, type: REPOSITORY, first: $first, after: $after) {
			repositoryCount
			edges {
				node {
					... on Repository {
						name
						stargazerCount
						updatedAt
						url
						owner {
							login
							avatarUrl
						}
					}
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`

export const REPOSITORY_DETAILS = gql`
	query RepositoryDetails($name: String!, $owner: String!) {
		repository(name: $name, owner: $owner) {
			name
			stargazerCount
			updatedAt
			owner {
				login
				avatarUrl
			}
			languages(first: 10) {
				edges {
					node {
						name
					}
				}
			}
			description
		}
	}
`
