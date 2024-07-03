// Interfaces
import { SearchInputProps } from './interfaces'

/**
 * Component for search input field.
 *
 * @param query - The current search query.
 * @param handleSearch - Function to handle search input changes.
 * @returns An input field for search queries.
 */
const SearchInput: React.FC<SearchInputProps> = ({ query, handleSearch }) => {
	const baseQuery = query.split(' ')[4]

	return (
		<input
			type='text'
			placeholder='Type to search'
			className='text-start flex justify-center center bg-gray-700 text-white rounded-lg w-80 p-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
			value={baseQuery}
			onChange={handleSearch}
		/>
	)
}

export { SearchInput }
