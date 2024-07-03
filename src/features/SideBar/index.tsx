import React from 'react'
import LanguageFilter from './ui/LanguageFilter'
import PopularityFilter from './ui/PopularityFilter'
import DateAddedFilter from './ui/DateAddedFilter'

const Sidebar: React.FC = () => {
	return (
		<div className='w-64 bg-[#2c353c] text-white flex-shrink-0 p-4 absolute top-0 bottom-0'>
			<h2 className='text-lg font-bold mb-4'>Filter by</h2>
			<LanguageFilter />
			<PopularityFilter />
			<DateAddedFilter />
		</div>
	)
}

export default Sidebar
