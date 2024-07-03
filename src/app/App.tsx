// Apollo
import { ApolloProvider } from '@apollo/client'

// Route
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Shared -> Config
import client from '../shared/config/apolloClient'

// Pages
import RepositoryCard from '../pages/RepositoryCard'
import Main from '../pages/MainPage'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/repository/:owner/:name' element={<RepositoryCard />} />
				</Routes>
			</Router>
		</ApolloProvider>
	)
}

export default App
