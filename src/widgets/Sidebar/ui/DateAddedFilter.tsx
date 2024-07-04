// Base
import React, { useState } from 'react'

// Features -> Button
import CustomButton from '@/features/CustomButton'

// Interface
import { DateAddedFilterProps } from '../interface'

/**
 * Component for filtering by date added.
 *
 * @param setDateAdded - Function to set the date added filter value.
 * @returns A list of buttons to filter by recent or least recent updates.
 */
const DateAddedFilter: React.FC<DateAddedFilterProps> = ({ setDateAdded }) => {
	const [activeButton, setActiveButton] = useState<string | null>(null)

	const handleButtonClick = (value: string) => {
		setDateAdded(value)
		setActiveButton(value)
	}

	return (
		<div className='mb-10 border-b border-white pb-4'>
			<h3 className='text-sm text-gray-400 font-semibold mb-2'>Date added</h3>
			<ul>
				<li>
					<CustomButton
						isActive={activeButton === 'desc'}
						onClick={() => handleButtonClick('desc')}
					>
						Recently updated
					</CustomButton>
				</li>
				<li className='mb-1'>
					<CustomButton
						isActive={activeButton === 'asc'}
						onClick={() => handleButtonClick('asc')}
					>
						Least recently updated
					</CustomButton>
				</li>
			</ul>
		</div>
	)
}

export default DateAddedFilter
