// Apollo
import { gql } from '@apollo/client'

/**
 * GraphQL query to fetch repository details.
 *
 * @param name - The name of the repository.
 * @param owner - The owner of the repository.
 * @returns Details of the specified repository.
 */
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
