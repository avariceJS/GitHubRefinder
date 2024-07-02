// Shared
import useRepositorySearch from '../shared/hooks/useRepositorySearch'

// Features
import RepositoriesList from '../features/RepositoriesList'
import { SearchInput } from '../features/SearchInput'
import { Pagination } from '../features/Pagination'

const MainPage: React.FC = () => {
	const { query, data, loading, error, handleSearch, handlePageChange } =
		useRepositorySearch()

	return (
		<div>
			<SearchInput query={query} handleSearch={handleSearch} />
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data?.search && <RepositoriesList data={data} />}
			<Pagination handlePageChange={handlePageChange} />
		</div>
	)
}

export default MainPage
