// Base
import React, { useState } from 'react'

// Features -> Button
import CustomButton from '../../CustomButton'

// Interface
import { PopularityFilterProps } from '../interface'

const PopularityFilter: React.FC<PopularityFilterProps> = ({
	setPopularity,
}) => {
	const [activeButton, setActiveButton] = useState<string | null>(null)

	const handleButtonClick = (value: string) => {
		setPopularity(value)
		setActiveButton(value)
	}

	/**
	 * Component for filtering by popularity (number of stars).
	 *
	 * @param setPopularity - Function to set the popularity filter value.
	 * @returns A list of buttons to filter by most or fewest stars.
	 */
	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Popularity</h3>
			<ul>
				<li>
					<CustomButton
						isActive={activeButton === 'desc'}
						onClick={() => handleButtonClick('desc')}
					>
						Most stars
					</CustomButton>
				</li>
				<li className='mb-1'>
					<CustomButton
						isActive={activeButton === 'asc'}
						onClick={() => handleButtonClick('asc')}
					>
						Fewest stars
					</CustomButton>
				</li>
			</ul>
		</div>
	)
}

export default PopularityFilter
