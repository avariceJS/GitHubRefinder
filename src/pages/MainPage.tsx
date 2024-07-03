// Base
import React, { useState, useEffect } from 'react'

// Shared -> Hooks
import useRepositorySearch from '../shared/hooks/useRepositorySearch'

// Features
import RepositoriesList from '../features/RepositoriesList'
import { Pagination } from '../features/Pagination'
import Sidebar from '../features/Sidebar'
import Header from '../features/Header'

const MainPage: React.FC = () => {
	const [language, setLanguage] = useState<string | null>(null)
	const [popularity, setPopularity] = useState<string | null>(null)
	const [dateAdded, setDateAdded] = useState<string | null>(null)

	const {
		query,
		data,
		loading,
		error,
		handleSearch,
		handlePageChange,
		setQuery,
	} = useRepositorySearch()

	useEffect(() => {
		const generateSearchQuery = () => {
			let newQuery = 'stars:>0'
			if (language) {
				newQuery += ` language:${language}`
			}
			if (popularity) {
				newQuery += ` sort:stars-${popularity}`
			}
			if (dateAdded) {
				newQuery += ` sort:updated-${dateAdded}`
			}
			return newQuery
		}

		setQuery(generateSearchQuery())
	}, [language, popularity, dateAdded, setQuery])

	return (
		<div className='flex flex-col min-h-screen'>
			<header className='flex-shrink-0'>
				<Header query={query} handleSearch={handleSearch} />
			</header>
			<div className='flex flex-grow relative'>
				<aside>
					<Sidebar
						setLanguage={setLanguage}
						setPopularity={setPopularity}
						setDateAdded={setDateAdded}
					/>
				</aside>
				<div className='flex flex-col flex-grow ml-64'>
					<main className='flex-grow flex flex-col justify-center items-center'>
						{loading && <p>Loading...</p>}
						{error && <p>Error: {error.message}</p>}
						{data?.search && <RepositoriesList data={data} />}
					</main>
					<footer className='flex-grow flex flex-col justify-end items-center'>
						<Pagination handlePageChange={handlePageChange} />
					</footer>
				</div>
			</div>
		</div>
	)
}

export default MainPage
