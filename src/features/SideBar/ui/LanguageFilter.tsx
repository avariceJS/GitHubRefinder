// Base
import React, { useState } from 'react'

// languages
import { languages } from './languages'

// Features -> Button
import CustomButton from '../../CustomButton'

// Interface
import { LanguageFilterProps } from '../interface'

/**
 * Component for filtering by programming language.
 *
 * @param setLanguage - Function to set the selected language filter.
 * @returns A list of buttons to filter by different programming languages.
 */
const LanguageFilter: React.FC<LanguageFilterProps> = ({ setLanguage }) => {
	const [activeButton, setActiveButton] = useState<string | null>(null)

	const handleButtonClick = (language: string) => {
		setLanguage(language)
		setActiveButton(language)
	}

	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Languages</h3>
			<ul>
				{languages.map((language, index) => (
					<li className='mb-1' key={index}>
						<CustomButton
							isActive={activeButton === language}
							onClick={() => handleButtonClick(language)}
						>
							{language}
						</CustomButton>
					</li>
				))}
			</ul>
		</div>
	)
}

export default LanguageFilter
