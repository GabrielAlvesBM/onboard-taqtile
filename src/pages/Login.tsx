import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <main>
      <h1 className='login-title'>Bem-vindo(a) à Taqtile!</h1>
      <form className='login-form' action='#'>
        <Input type='text' placeholder='Email' />
        <Input type='text' placeholder='Senha' />
        <Button className='login__submit-button' text='Entrar' />
      </form>
    </main>
  );
};

export default Login;
