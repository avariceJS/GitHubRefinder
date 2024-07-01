import { ApolloProvider } from '@apollo/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


import RepositoryCard from '../pages/RepositoryCard'
import client from '../shared/config/apolloClient'
import MainPage from '../pages/MainPage'

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/repository/:owner/:name' element={<RepositoryCard />} />
				</Routes>
			</Router>
		</ApolloProvider>
	)
}

export default App
