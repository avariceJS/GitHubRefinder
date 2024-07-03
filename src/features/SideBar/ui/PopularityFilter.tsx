import React from 'react'

const PopularityFilter: React.FC = () => {
	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Popularity</h3>
			<ul>
				<li className='mb-1'>
					<button>Fewest stars</button>
				</li>
				<li>
					<button>Most stars</button>
				</li>
			</ul>
		</div>
	)
}

export default PopularityFilter
