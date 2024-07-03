// Base
import { useEffect, useState } from 'react'

// Apollo
import { useQuery } from '@apollo/client'

// API
import { SEARCH_REPOSITORIES } from '../api/main.graphql'

// State
import useStore from '../store'

/**
 * Custom hook for handling repository search functionality.
 * Manages query state, pagination, and local storage synchronization.
 *
 * 	 @returns query: Current search query string,
 *   @returns data: Retrieved repository data,
 *   @returns loading: Loading state of the query,
 *   @returns error: Error state of the query,
 *   @returns handleSearch: Function to update search query,
 *   @returns handlePageChange: Function to handle pagination changes,
 *   @returns page: Current page number,
 *   @returns totalPages: Total number of pages based on search results,
 *
 */
const useRepositorySearch = () => {
	const { query, setQuery } = useStore()
	const [page, setPage] = useState(1)
	const [repositories, setRepositories] = useState([])
	const username = import.meta.env.VITE_GITHUB_USERNAME

	const { data, loading, error } = useQuery(SEARCH_REPOSITORIES, {
		variables: {
			query: query === 'stars:>0' || query === '' ? `user:${username}` : query,
			first: 100,
			after: null,
		},
	})

	useEffect(() => {
		const savedQuery = localStorage.getItem('query')
		if (savedQuery) setQuery(savedQuery)
	}, [setQuery, setPage])

	useEffect(() => {
		if (data?.search.edges) {
			setRepositories(data.search.edges)
		}
	}, [data])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
		localStorage.setItem('query', e.target.value)
	}

	const handlePageChange = (newPage: number) => {
		setPage(newPage)
		localStorage.setItem('page', newPage.toString())
	}

	const itemsPerPage = 10
	const totalPages = Math.ceil(repositories.length / itemsPerPage)
	const paginatedRepositories = repositories.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage
	)

	return {
		query,
		repositories: paginatedRepositories,
		loading,
		error,
		handleSearch,
		handlePageChange,
		setQuery,
		page,
		totalPages,
	}
}

export default useRepositorySearch
