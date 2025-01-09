import { useState } from 'react';
import Button from '../components/Button';
import ErrorMsgs from '../components/ErrorMsgs';

const Login = () => {
  const [errorMsgs, setErrorMsgs] = useState<string[] | null>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordInput(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    setErrorMsgs(null);

    let newErrorMsgs: string[] = [];

    if (!emailInput) {
      newErrorMsgs.push('Insira um Email.');
    } else if (!emailRegex.test(emailInput)) {
      newErrorMsgs.push("Email inválido. O formato correto é 'usuario@dominio.com'.");
    }

    if (passwordInput.length < 7) {
      newErrorMsgs.push('Senha inválida. Deve conter pelo menos 7 caracteres.');
    } else if (!passwordRegex.test(passwordInput)) {
      newErrorMsgs.push('Senha inválida. Deve conter pelo menos 1 letra e 1 número.');
    }

    if (newErrorMsgs.length > 0) {
      setErrorMsgs(newErrorMsgs);
    } else {
      console.log('Formulário enviado.');
    }
  }

  return (
    <main>
      <h1 className='login-title'>Bem-vindo(a) à Instaq!</h1>
      <form className='login-form' action='#' onSubmit={handleSubmit}>
        <ErrorMsgs errorMsgs={errorMsgs} />

        <input
          className='login-input'
          id='email'
          type='text'
          placeholder='Email'
          autoComplete='off'
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          className='login-input'
          id='password'
          type='password'
          placeholder='Senha'
          autoComplete='off'
          value={passwordInput}
          onChange={handlePasswordChange}
        />

        <Button className='login-submit-button' text='Entrar' />
      </form>
    </main>
  );
};

export default Login;
