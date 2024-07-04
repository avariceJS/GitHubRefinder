// Base
import { useContext } from 'react'

// Provider
import { ThemeProviderContext } from '../provider/theme-provider'

/**
 * Custom hook to access the current theme and theme setter function.
 *
 * @returns An object containing the current theme and a function to set the theme.
 * @throws Throws an error if used outside of a ThemeProvider context.
 */
export const useTheme = () => {
	const context = useContext(ThemeProviderContext)

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider')

	return context
}
