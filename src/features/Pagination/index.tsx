// Interfaces
import { PaginationProps } from './interfaces'

// Base
import { useState } from 'react'

/**
 * Component for pagination buttons.
 *
 * @param handlePageChange - Function to handle page changes.
 * @returns A set of pagination buttons.
 */
const Pagination: React.FC<PaginationProps> = ({ handlePageChange }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setActiveIndex(index)
		handlePageChange(index + 1)
	}

	return (
		<div>
			{[...Array(10)].map((_, index) => (
				<button
					className={`border rounded-md m-1 py-[2.9px] w-8 hover:border-blue-600 hover:scale-110 ${
						activeIndex === index ? 'border-blue-600' : 'border-cyan-200'
					}`}
					key={index}
					onClick={() => handleClick(index)}
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}

export { Pagination }
