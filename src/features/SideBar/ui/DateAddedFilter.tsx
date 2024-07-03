import React from 'react'

const DateAddedFilter: React.FC = () => {
	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Date added</h3>
			<ul>
				<li className='mb-1'>
					<button>Least recently updated</button>
				</li>
				<li>
					<button>Recently updated</button>
				</li>
			</ul>
		</div>
	)
}

export default DateAddedFilter
