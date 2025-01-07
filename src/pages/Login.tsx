import Button from '../components/Button';

const Login = () => {
  return (
    <main>
      <h1 className='login-title'>Bem-vindo(a) à Taqtile!</h1>
      <form className='login-form' action='#'>
        <input
          className='login__input'
          type='email'
          placeholder='Email'
        />
        <input
          className='login__input'
          type='password'
          placeholder='Senha'
        />
        <Button className='login__submit-button' text='Entrar' />
      </form>
    </main>
  );
};

export default Login;
