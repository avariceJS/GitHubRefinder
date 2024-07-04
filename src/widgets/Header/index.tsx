// Base
import React from 'react'

// UI
import { IconGroup } from './ui/IconGroup'
import { Navbar } from './ui/Navbar'
import { TitleSection } from './ui/TitleSection'
import { URLDisplay } from './ui/URLDisplay'

// Interfaces
import { HeaderProps } from './interfaces'


/**
 * header component combining IconGroup, URLDisplay, TitleSection, and Navbar.
 *
 * @param query - Current search query string.
 * @param handleSearch - Function to handle search input changes.
 * @returns A complete header section for the application.
 */
const Header: React.FC<HeaderProps> = ({ query, handleSearch }) => {
	return (
		<div className='bg-[#313a41] from-gray-900 to-gray-800 text-white'>
			<div className='flex items-center justify-between p-2'>
				<IconGroup />
				<URLDisplay />
				<TitleSection />
			</div>
			<Navbar query={query} handleSearch={handleSearch} />
		</div>
	)
}

export default Header
