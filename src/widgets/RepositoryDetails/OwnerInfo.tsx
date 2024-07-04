import { Link } from 'react-router-dom'
import { OwnerInfoProps } from './interface'

const OwnerInfo = ({ owner }: OwnerInfoProps) => (
	<div className='flex flex-col items-center mb-4'>
		<img
			src={owner.avatarUrl}
			alt={owner.login}
			className='w-24 h-24 rounded-full m-4'
		/>
		<p className='text-center text-red-600 font-semibold'>
			Owner:{' '}
			<Link to={`https://github.com/${owner.login}`} className='text-blue-500'>
				{owner.login}
			</Link>
		</p>
	</div>
)

export default OwnerInfo
