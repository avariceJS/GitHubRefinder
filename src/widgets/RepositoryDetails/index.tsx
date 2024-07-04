import { Link } from 'react-router-dom'

import { Undo2 } from 'lucide-react'
import LanguagesList from './LanguagesList'
import OwnerInfo from './OwnerInfo'
import { RepositoryDetailsProps } from './interface'

const RepositoryDetails = ({ repository }: RepositoryDetailsProps) => (
	<div className='bg-gray-800 shadow-md rounded-lg p-6 mt-6 w-full max-w-2xl'>
		<Link to='/'>
			<Undo2 className='text-slate-100' />
		</Link>
		<h1 className='text-3xl font-bold mb-4 text-center'>{repository.name}</h1>
		<p className='text-xl mb-2 text-center'>
			Stars: {repository.stargazerCount}
		</p>
		<p className='text-lg mb-2 text-center '>
			Last Commit: {new Date(repository.updatedAt).toLocaleDateString()}
			<OwnerInfo owner={repository.owner} />
		</p>
		<LanguagesList languages={repository.languages} />
		<p className='text-center text-green-600 mb-1 font-semibold'>About: </p>
		<p className='text-center'>{repository.description}</p>
	</div>
)

export default RepositoryDetails
