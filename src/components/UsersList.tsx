type User = {
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

const UsersList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className='users-list'>
      {users.map((user, index) => (
        <li className='users-list-item' key={index}>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
