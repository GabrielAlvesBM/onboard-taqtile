import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { basicListUsers } from '../apollo/querys/basicListUsers';
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

  const { loading } = useQuery(basicListUsers, {
    variables: {
      limit: 25,
    },
    onCompleted: (data) => {
      setUsersData(data);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
      setErrorMsgs([errorMessage]);
    },
  });

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {loading && <div className='button-spinner'></div>}
      <ErrorMsgs errorMsgs={errorMsgs} />

      {usersData && <UsersTable users={usersData.users.nodes} />}
    </main>
  );
};

export default Users;

