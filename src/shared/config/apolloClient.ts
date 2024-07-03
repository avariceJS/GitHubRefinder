// Apollo
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// HTTP link for Apollo Client
const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
})

// Context to include authorization token for Apollo Client
const authLink = setContext((_, { headers }) => {
	const token = 'MyToken' // GitHub-> Settings-> DeveloperSettings-> Tokens
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

// Apollo Client instance with authenticated HTTP link
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

export default client
