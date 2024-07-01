import { DocumentNode, useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { SEARCH_REPOSITORIES } from './model/queries'
import useStore from '../shared/store'

interface Node {
	url: string
	owner: {
		login: string
	}
	name: string
	stargazerCount: number
	updatedAt: string
}

interface SearchRepositoriesData {
	search: {
		pageInfo: {
			endCursor: string | null
			startCursor: string | null
		}
		edges: { node: Node }[]
	}
}

interface SearchRepositoriesVariables {
	query: string
	first: number
	after: string | null
	before: string | null
}

const MainPage: React.FC = () => {
	const { query, page, setQuery, setPage } = useStore()
	const { data, loading, error, fetchMore, variables } = useQuery<
		SearchRepositoriesData,
		SearchRepositoriesVariables
	>(SEARCH_REPOSITORIES as DocumentNode, {
		variables: { query, first: 10, after: null, before: null },
	})

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
		const direction = newPage > page ? 'next' : 'prev'
		const cursor =
			direction === 'next'
				? data?.search.pageInfo.endCursor
				: data?.search.pageInfo.startCursor

		await fetchMore({
			variables: {
				...variables,
				after: direction === 'next' ? cursor : null,
				before: direction === 'prev' ? cursor : null,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev
				return fetchMoreResult
			},
		})

		setPage(newPage)
		localStorage.setItem('page', newPage.toString())
	}

	return (
		<div>
			<input type='text' value={query} onChange={handleSearch} />
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data?.search && (
				<ul>
					{data.search.edges.map(({ node }) => (
						<li key={node.url}>
							<a href={`/repository/${node.owner.login}/${node.name}`}>
								{node.name}
							</a>{' '}
							- {node.stargazerCount} stars -{' '}
							{new Date(node.updatedAt).toLocaleDateString()} -{' '}
							<a href={node.url}>GitHub</a>
						</li>
					))}
				</ul>
			)}
			<div>
				{[...Array(10)].map((_, index) => (
					<button key={index} onClick={() => handlePageChange(index + 1)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	)
}

export default MainPage
