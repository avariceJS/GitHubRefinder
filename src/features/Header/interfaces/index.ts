import { ChangeEvent } from 'react'

export interface FullHeaderProps {
	query: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
