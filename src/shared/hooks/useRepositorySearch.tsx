// Base
import { useEffect } from 'react'

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
	const { query, page, setQuery, setPage } = useStore()
	const { data, loading, error, fetchMore, variables } = useQuery(
		SEARCH_REPOSITORIES,
		{
			variables: { query, first: 10, after: null },
		}
	)

	useEffect(() => {
		const savedQuery = localStorage.getItem('query')
		const savedPage = localStorage.getItem('page')
		if (savedQuery) setQuery(savedQuery)
		if (savedPage) setPage(Number(savedPage))
	}, [setQuery, setPage])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
		localStorage.setItem('query', e.target.value)
	}

	const handlePageChange = async (newPage: number) => {
		const cursor = newPage > page ? data?.search.pageInfo.endCursor : null

		await fetchMore({
			variables: {
				...variables,
				after: cursor,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev
				return fetchMoreResult
			},
		})

		setPage(newPage)
		localStorage.setItem('page', newPage.toString())
	}

	return {
		query,
		data,
		loading,
		error,
		handleSearch,
		handlePageChange,
		page,
		totalPages: data?.search.repositoryCount
			? Math.ceil(data.search.repositoryCount / 10)
			: 0,
	}
}

export default useRepositorySearch
