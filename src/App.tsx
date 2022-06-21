import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
	query GetUser {
		user {
			id
			name
		}
	}
`;

function App() {
	const { data } = useQuery(GET_USER);

	return <h1>Hello World</h1>;
}

export default App;
