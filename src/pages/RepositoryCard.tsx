// Route
import { useParams } from 'react-router-dom'

// Apollo
import { useQuery } from '@apollo/client'

// Widgets
import RepositoryDetails from '@/widgets/RepositoryDetails'
import { Repository } from '@/widgets/RepositoryDetails/interface'

// Shared
import { REPOSITORY_DETAILS } from '@/shared/api/card.graphql'

// Features
import LoadingSpinner from '@/features/LoadingSpinner'
import ErrorMessage from '@/features/ErrorMessage'

const RepositoryCards = () => {
	const { owner, name } = useParams<{ owner: string; name: string }>()
	const { data, loading, error } = useQuery<{ repository: Repository }>(
		REPOSITORY_DETAILS,
		{
			variables: { name, owner },
		}
	)

	if (loading) return <LoadingSpinner />
	if (error) return <ErrorMessage message={error.message} />

	if (!data || !data.repository)
		return <p className='text-center'>No data found</p>

	return (
		<div className='flex flex-col items-center min-h-screen bg-[#1f282f] p-4 font-medium text-gray-300'>
			<RepositoryDetails repository={data.repository} />
		</div>
	)
}

export default RepositoryCards
