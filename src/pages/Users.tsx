import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BASIC_USERS } from '../apollo/querys/basicListUsers';
import UsersTable from '../components/UsersTable';
import ErrorMsgs from '../components/ErrorMsgs';

const Users = () => {
  type User = {
    name: string;
    email: string;
  };

  type UserQueryData = {
    users: {
      nodes: User[];
    };
  };

  const [errorMsgs, setErrorMsgs] = useState<string[] | null>(null);
  const [usersData, setUsersData] = useState<UserQueryData | null>(null);
  const [limit, setLimit] = useState<number>(50);

  const { loading, fetchMore } = useQuery(GET_BASIC_USERS, {
    variables: {
      limit: limit,
    },
    onCompleted: (data) => {
      setUsersData(data);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
      setErrorMsgs([errorMessage]);
    },
  });

  function loadMoreUsers(addInLimit: number) {
    const newLimit = limit + addInLimit;
    setLimit(newLimit);

    fetchMore({
      variables: {
        limit: newLimit,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevResult;
        }

        return {
          users: {
            ...fetchMoreResult.users,
            nodes: [...prevResult.users.nodes, ...fetchMoreResult.users.nodes],
          },
        };
      },
    });
  }

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {loading && <div className='button-spinner'></div>}
      <ErrorMsgs errorMsgs={errorMsgs} />

      {usersData && (
        <>
          <UsersTable users={usersData.users.nodes} />

          <button className='load-more-users-btn' onClick={() => loadMoreUsers(50)} disabled={loading}>
            {loading ? <div className='button-spinner'></div> : 'Carregar mais 50 usuários'}
          </button>
        </>
      )}
    </main>
  );
};

export default Users;
