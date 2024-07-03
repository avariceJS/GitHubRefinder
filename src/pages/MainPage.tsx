// Shared
import useRepositorySearch from '../shared/hooks/useRepositorySearch'

// Features
import FullHeader from '../features/Header'
import { Pagination } from '../features/Pagination'
import RepositoriesList from '../features/RepositoriesList'

const MainPage: React.FC = () => {
	const { query, data, loading, error, handleSearch, handlePageChange } =
		useRepositorySearch()

	return (
		<div className='flex flex-col min-h-screen'>
			<header className='flex-shrink-0'>
				<FullHeader query={query} handleSearch={handleSearch} />
			</header>
			<main className='flex-grow flex flex-col justify-center items-center'>
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error.message}</p>}
				{data?.search && <RepositoriesList data={data} />}
			</main>
			<footer className='flex-shrink-0'>
				<Pagination handlePageChange={handlePageChange} />
			</footer>
		</div>
	)
}

export default MainPage
