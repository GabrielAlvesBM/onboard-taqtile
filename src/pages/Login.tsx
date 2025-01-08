import Button from '../components/Button';

const Login = () => {
  return (
    <main>
      <h1 className='login-title'>Bem-vindo(a) à Instaq!</h1>
      <form className='login-form' action='#'>
        <input
          className='login-input'
          type='email'
          placeholder='Email'
        />
        <input
          className='login-input'
          type='password'
          placeholder='Senha'
        />
        <Button className='login-submit-button' text='Entrar' />
      </form>
    </main>
  );
};

export default Login;
