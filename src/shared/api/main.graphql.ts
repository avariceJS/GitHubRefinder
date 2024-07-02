// Apollo
import { gql } from '@apollo/client'

/**
 * GraphQL query to search for repositories.
 *
 * @param query - The search query string.
 * @param first - The number of repositories to fetch.
 * @param after - The cursor for pagination.
 * @returns A list of repositories matching the search query.
 */
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
