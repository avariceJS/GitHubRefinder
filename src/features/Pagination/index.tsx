// Interfaces
import { PaginationProps } from './interfaces'

/**
 * Component for pagination buttons.
 *
 * @param handlePageChange - Function to handle page changes.
 * @returns A set of pagination buttons.
 */
const Pagination: React.FC<PaginationProps> = ({ handlePageChange }) => {
	return (
		<div>
			{[...Array(10)].map((_, index) => (
				<button key={index} onClick={() => handlePageChange(index + 1)}>
					{index + 1}
				</button>
			))}
		</div>
	)
}

export { Pagination }
