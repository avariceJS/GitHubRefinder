// Base
import React from 'react'

// Interface
import { SidebarProps } from './interface'

// UI
import LanguageFilter from './ui/LanguageFilter'
import PopularityFilter from './ui/PopularityFilter'
import DateAddedFilter from './ui/DateAddedFilter'

/**
 * Sidebar component displaying filters for language, popularity, and date added.
 *
 * @param setLanguage - Function to set the language filter.
 * @param setPopularity - Function to set the popularity filter.
 * @param setDateAdded - Function to set the date added filter.
 * @returns A sidebar with language, popularity, and date added filters.
 */
const Sidebar: React.FC<SidebarProps> = ({
	setLanguage,
	setPopularity,
	setDateAdded,
}) => {
	return (
		<div className='w-64 bg-[#2c353c] text-white flex-shrink-0 p-4 absolute top-0 bottom-0'>
			<h2 className='text-lg font-bold mb-5'>Filter by</h2>
			<LanguageFilter setLanguage={setLanguage} />
			<PopularityFilter setPopularity={setPopularity} />
			<DateAddedFilter setDateAdded={setDateAdded} />
		</div>
	)
}

export default Sidebar
