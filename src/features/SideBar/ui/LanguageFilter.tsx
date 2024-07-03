import React from 'react'
import { languages } from './languages'

const LanguageFilter: React.FC = () => {
	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Languages</h3>
			<ul>
				{languages.map((language, index) => (
					<li className='mb-1' key={index}>
						<button>{language}</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default LanguageFilter
