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
	return (
		<input
			type='text'
			placeholder='Search'
			className=' text-start flex justify-center center bg-gray-700 text-white rounded-lg w-80 p-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
			value={query}
			onChange={handleSearch}
		/>
	)
}

export { SearchInput }
