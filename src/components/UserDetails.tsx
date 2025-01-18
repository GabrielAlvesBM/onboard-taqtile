import NavigateButton from './NavigateButton';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
};

interface UserDetailsProps {
  userData: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData }) => {
  return (
    <div className='user-details'>
      <NavigateButton className='user-details-back-btn' to='/users' text='◀️ Lista de Usuários'></NavigateButton>
      <p>
        <strong>ID:</strong> {userData.id}
      </p>
      <p>
        <strong>Nome:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Telefone:</strong> {userData.phone}
      </p>
      <p>
        <strong>Data de Nascimento:</strong> {userData.birthDate}
      </p>
      <p>
        <strong>Cargo:</strong> {userData.role}
      </p>
    </div>
  );
};

export default UserDetails;
