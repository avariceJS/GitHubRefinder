import React from 'react'
import useRepositorySearch from '../shared/hooks/useRepositorySearch'
import FullHeader from '../features/Header'
import { Pagination } from '../features/Pagination'
import RepositoriesList from '../features/RepositoriesList'
import Sidebar from '../features/SideBar'

const MainPage: React.FC = () => {
	const { query, data, loading, error, handleSearch, handlePageChange } = useRepositorySearch()

	return (
		<div className='flex flex-col min-h-screen'>
			<header className='flex-shrink-0'>
				<FullHeader query={query} handleSearch={handleSearch} />
			</header>
			<div className='flex flex-grow relative'>
				<aside>
					<Sidebar />
				</aside>
				<div className='flex flex-col flex-grow ml-64'>
					<main className='flex-grow flex flex-col justify-center items-center'>
						{loading && <p>Loading...</p>}
						{error && <p>Error: {error.message}</p>}
						{data?.search && <RepositoriesList data={data} />}
					</main>
					<footer className='flex-shrink-0'>
						<Pagination handlePageChange={handlePageChange} />
					</footer>
				</div>
			</div>
		</div>
	)
}

export default MainPage
