// Base
import { createContext, useEffect, useState } from 'react'

// Type
import {
	initialState,
	Theme,
	ThemeProviderProps,
	ThemeProviderState,
} from './type'

// Context for theme provider
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

/**
 * ThemeProvider component manages the application theme state.
 *
 * @param children - The components wrapped by the theme provider.
 * @param defaultTheme - The default theme ('system' by default).
 * @param storageKey - The key used to store the theme in localStorage.
 * @param props - Additional props to pass to the context provider.
 * @returns A provider component managing theme state and applying theme changes.
 */
export function ThemeProvider({
	children,
	defaultTheme = 'system',
	storageKey = 'vite-ui-theme',
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme
	)
	console.log(theme)

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme)
			setTheme(theme)
		},
	}

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}

export default ThemeProvider
export { ThemeProviderContext }
