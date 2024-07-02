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
	return <input type='text' value={query} onChange={handleSearch} />
}

export { SearchInput }
