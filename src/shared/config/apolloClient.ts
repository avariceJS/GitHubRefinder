import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
	const token = 'MyToken' // GitHub-> Settings-> DeveloperSettings-> Tokens
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

export default client
