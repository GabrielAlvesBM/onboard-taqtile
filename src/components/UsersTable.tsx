import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

const UsersTable: React.FC<UserListProps> = ({ users }) => {
  const navigate = useNavigate();

  return (
    <table className='users-table'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
          >
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
