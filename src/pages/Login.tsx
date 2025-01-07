import Input from '../components/Input';

const Login = () => {
  return (
    <main>
      <form className='login-form' action='#'>
        <Input type='text' placeholder='Email' />
        <Input type='text' placeholder='Senha' />
      </form>
    </main>
  );
};

export default Login;
