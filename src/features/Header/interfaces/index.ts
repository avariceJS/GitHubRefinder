// Base
import { ChangeEvent } from 'react'

export interface HeaderProps {
	query: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
