// Base
import React, { useState, useEffect } from 'react'

// Shared -> Hooks
import useRepositorySearch from '@/shared/hooks/useRepositorySearch'

// Features
import RepositoriesList from '@/features/RepositoriesList'
import { Pagination } from '@/features/Pagination'
import LoadingSpinner from '@/features/LoadingSpinner'
import ErrorMessage from '@/features/ErrorMessage'

// Widgets
import Header from '@/widgets/Header'
import Sidebar from '@/widgets/Sidebar'

const MainPage: React.FC = () => {
	const [language, setLanguage] = useState<string | null>(null)
	const [popularity, setPopularity] = useState<string | null>(null)
	const [dateAdded, setDateAdded] = useState<string | null>(null)

	const {
		query,
		repositories,
		loading,
		error,
		handleSearch,
		handlePageChange,
		setQuery,
		totalPages,
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
		<div className='flex flex-col min-h-screen dark:bg-[#1f282f]'>
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
						{loading ? (
							<LoadingSpinner />
						) : (
							<>
								{error && <ErrorMessage message={error.message} />}
								{repositories.length > 0 ? (
									<RepositoriesList
										data={{ search: { edges: repositories } }}
									/>
								) : (
									<p className='text-red-300 font-bold'>
										No repositories found.
									</p>
								)}
							</>
						)}
					</main>
					<footer className='flex-grow flex flex-col justify-end items-center'>
						<Pagination
							handlePageChange={handlePageChange}
							totalPages={totalPages}
						/>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default MainPage
