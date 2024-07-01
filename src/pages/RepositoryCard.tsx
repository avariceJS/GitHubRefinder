import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { REPOSITORY_DETAILS } from './model/queries'

interface Repository {
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

const RepositoryCard = () => {
	const { owner, name } = useParams<{ owner: string; name: string }>()
	const { data, loading, error } = useQuery<{ repository: Repository }>(
		REPOSITORY_DETAILS,
		{
			variables: { name, owner },
		}
	)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	if (!data || !data.repository) return <p>No data found</p>

	const { repository } = data

	return (
		<div>
			<h1>{repository.name}</h1>
			<p>Stars: {repository.stargazerCount}</p>
			<p>Last Commit: {new Date(repository.updatedAt).toLocaleDateString()}</p>
			<img src={repository.owner.avatarUrl} alt={repository.owner.login} />
			<p>
				Owner:{' '}
				<a href={`https://github.com/${repository.owner.login}`}>
					{repository.owner.login}
				</a>
			</p>
			<ul>
				{repository.languages.edges.map(({ node }) => (
					<li key={node.name}>{node.name}</li>
				))}
			</ul>
			<p>{repository.description}</p>
		</div>
	)
}

export default RepositoryCard
