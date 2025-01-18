import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../apollo/querys/userDetails';
import ErrorMsgs from '../components/ErrorMsgs';
import UserDetails from '../components/UserDetails';

const UserId = () => {
  type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    role: string;
  };

  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<User | null>(null);
  const [errorMsgs, setErrorMsgs] = useState<Record<string, string>>({});

  const { loading } = useQuery(GET_USER_DETAILS, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      setUserData(data.user);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
      setErrorMsgs({ gql: errorMessage });
    },
  });

  return (
    <main>
      {loading && <div className='button-spinner'></div>}
      {errorMsgs.gql && <ErrorMsgs errorMsgs={{ gql: errorMsgs.gql }} />}

      {userData && <UserDetails userData={userData} />}
    </main>
  );
};

export default UserId;
