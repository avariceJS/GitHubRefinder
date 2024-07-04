// Apollo
import { ApolloProvider } from '@apollo/client'

// Route
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Shared -> Config
import client from '@/shared/config/apolloClient'

// Pages
import Main from '@/pages/MainPage'
import RepositoryCard from '@/pages/RepositoryCard'

// Shared -> Provider
import { ThemeProvider } from '@/shared/provider/theme-provider'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<Router>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route
							path='/repository/:owner/:name'
							element={<RepositoryCard />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default App
