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
		<div className='w-1/3'>
			<table className='w-full'>
				<thead className='text-cyan-400'>
					<tr className='text-left'>
						<th className='w-1/2'>Repository</th>
						<th className='w-1/6 text-center'>Stars</th>
						<th className='w-1/3 text-center'>Last Commit</th>
						<th className='flex justify-evenly'>Link</th>
					</tr>
				</thead>
				<tbody>
					{data?.search.edges.map(({ node }) => (
						<tr key={node.url} className='border-b'>
							<td className='py-4'>
								<a
									className='text-red-500'
									href={`/repository/${node.owner.login}/${node.name}`}
								>
									{node.name}
								</a>
							</td>
							<td className='text-center text-orange-400'>
								{node.stargazerCount}
							</td>
							<td className='text-center text-blue-500'>
								{new Date(node.updatedAt).toLocaleDateString()}
							</td>
							<td className='text-purple-500'>
								<a href={node.url}>GitHub</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default RepositoriesList
