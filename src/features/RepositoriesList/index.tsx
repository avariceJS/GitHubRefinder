// Interfaces
import { RepositoriesListProps } from './interfaces'

/**
 * Component to display a list of repositories.
 *
 * @param data - The data containing repository information.
 * @returns A list of repositories with links and details.
 */
const RepositoriesList: React.FC<RepositoriesListProps> = ({ data }) => {
	return (
		<ul>
			{data?.search.edges.map(({ node }) => (
				<li key={node.url}>
					<a href={`/repository/${node.owner.login}/${node.name}`}>
						{node.name}
					</a>{' '}
					- {node.stargazerCount} stars -{' '}
					{new Date(node.updatedAt).toLocaleDateString()} -{' '}
					<a href={node.url}>GitHub</a>
				</li>
			))}
		</ul>
	)
}

export default RepositoriesList
