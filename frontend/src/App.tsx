import { gql, useQuery } from '@apollo/client'

import { UserForm } from './components/UserForm';

type User = {
  id: string;
  name: string;
}

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USERS);

  console.log(data);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>

      <UserForm />
    </div>
  )
}

export default App
