import React from 'react'
import { IconGroup } from './ui/IconGroup'
import { URLDisplay } from './ui/URLDisplay'
import { TitleSection } from './ui/TitleSection'
import { NavBar } from './ui/NavBar'
import { FullHeaderProps } from './interfaces'

const FullHeader: React.FC<FullHeaderProps> = ({ query, handleSearch }) => {
	return (
		<div className='bg-[#313a41] from-gray-900 to-gray-800 text-white'>
			<div className='flex items-center justify-between p-2'>
				<IconGroup />
				<URLDisplay />
				<TitleSection />
			</div>
			<NavBar query={query} handleSearch={handleSearch} />
		</div>
	)
}

export default FullHeader
