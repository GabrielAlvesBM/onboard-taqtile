import UsersList from '../components/UsersTable';

const Users = () => {
  const mockData = {
    users: {
      nodes: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Gabriel", email: "gabriel@example.com" },
        { name: "Tomaz", email: "tomaz@example.com" },
      ]
    }
  }

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <UsersList users={mockData.users.nodes} />
    </main>
  );
};

export default Users;
