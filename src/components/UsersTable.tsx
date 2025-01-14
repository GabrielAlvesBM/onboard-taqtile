type User = {
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

const UsersTable: React.FC<UserListProps> = ({ users }) => {
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
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
