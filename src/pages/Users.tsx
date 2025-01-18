import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BASIC_USERS } from '../apollo/querys/basicListUsers';
import UsersTable from '../components/UsersTable';
import ErrorMsgs from '../components/ErrorMsgs';
import RegisterPageButton from '../components/RegisterPageButton';

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

  const [errorMsgs, setErrorMsgs] = useState<Record<string, string>>({});
  const [usersData, setUsersData] = useState<UserQueryData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 50;

  const { loading } = useQuery(GET_BASIC_USERS, {
    variables: {
      limit: limit,
      offset: (currentPage - 1) * limit,
    },
    onCompleted: (data) => {
      setUsersData(data);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
      setErrorMsgs({ gql: errorMessage });
    },
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main>
      <RegisterPageButton />
      <h1>Lista de Usuários</h1>
      {loading && <div className='button-spinner'></div>}
      {errorMsgs.gql && <ErrorMsgs errorMsgs={{ gql: errorMsgs.gql }} />}

      {usersData && (
        <>
          <UsersTable users={usersData.users.nodes} />

          <nav className='pagination'>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>Página {currentPage}</span>
            <button onClick={handleNextPage} disabled={usersData.users.nodes.length < limit}>
              Próxima:
            </button>
          </nav>
        </>
      )}
    </main>
  );
};

export default Users;
