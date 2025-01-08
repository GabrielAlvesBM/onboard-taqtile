import { useState } from 'react';
import Button from '../components/Button';
import ErrorMsgs from '../components/ErrorMsgs';

const Login = () => {
  const [errorMsgs, setErrorMsgs] = useState<string[] | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const emailInput = form.querySelector('#email') as HTMLInputElement;
    const passwordInput = form.querySelector('#password') as HTMLInputElement;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    setErrorMsgs(null);

    let newErrorMsgs: string[] = [];

    if (!emailInput.value) {
      newErrorMsgs.push('Insira um Email.');
    } else if (!emailRegex.test(emailInput.value)) {
      newErrorMsgs.push("Email inválido. O formato correto é 'usuario@dominio.com'.");
    }

    if (passwordInput.value.length < 7) {
      newErrorMsgs.push('Senha inválida. Deve conter pelo menos 7 caracteres.');
    } else if (!passwordRegex.test(passwordInput.value)) {
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

        <input className='login-input' id='email' type='text' placeholder='Email' autoComplete='off' />
        <input className='login-input' id='password' type='password' placeholder='Senha' autoComplete='off' />

        <Button className='login-submit-button' text='Entrar' />
      </form>
    </main>
  );
};

export default Login;
