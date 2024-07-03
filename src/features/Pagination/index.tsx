// Interfaces
import { PaginationProps } from './interfaces'

// Base
import { useEffect, useState } from 'react'

/**
 * Component for pagination buttons.
 *
 * @param handlePageChange - Function to handle page changes.
 * @returns A set of pagination buttons.
 */
const Pagination: React.FC<PaginationProps> = ({
	handlePageChange,
	totalPages,
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const handleClick = (index: number) => {
		setActiveIndex(index)
		handlePageChange(index + 1)
	}

	useEffect(() => {
		setActiveIndex(0)
		handlePageChange(1)
	}, [])

	return (
		<div>
			{[...Array(totalPages)].map((_, index) => (
				<button
					className={`text-yellow-50 rounded-md m-1 py-[2.9px] w-8 hover:bg-[#374151] hover:scale-110 ${
						activeIndex === index ? '!bg-[#1F6FEB] ' : ''
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
