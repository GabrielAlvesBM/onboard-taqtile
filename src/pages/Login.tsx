import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMsgs from '../components/ErrorMsgs';
import { validateLoginForm } from '../utils/validation';
import { useMutation } from '@apollo/client';
import { MutationLogin } from '../apollo/mutations/login';
import RegisterPageButton from '../components/RegisterPageButton';

const Login = () => {
  const navigate = useNavigate();
  const [errorMsgs, setErrorMsgs] = useState<Record<string, string>>({});
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const [mutationLogin, { loading }] = useMutation(MutationLogin, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      navigate('/users');
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
      setErrorMsgs({ gql: errorMessage });
    },
  });

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordInput(event.target.value);
  }

  function validateForm(): boolean {
    setErrorMsgs({});

    const errors = validateLoginForm(emailInput, passwordInput);

    setErrorMsgs(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (validateForm()) {
      mutationLogin({
        variables: {
          data: { email: emailInput, password: passwordInput },
        },
      });
    }
  }

  return (
    <main>
      <RegisterPageButton />

      <h1 className='login-title'>Bem-vindo(a) à Instaq!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-div'>
          <input
            className='input'
            id='email'
            type='text'
            placeholder='Email'
            autoComplete='off'
            value={emailInput}
            onChange={handleEmailChange}
          />
          {errorMsgs.email && <ErrorMsgs errorMsgs={{ email: errorMsgs.email }} />}
        </div>
        <div className='input-div'>
          <input
            className='input'
            id='password'
            type='password'
            placeholder='Senha'
            autoComplete='off'
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          {errorMsgs.password && <ErrorMsgs errorMsgs={{ password: errorMsgs.password }} />}
        </div>

        {errorMsgs.gql && <ErrorMsgs errorMsgs={{ gql: errorMsgs.gql }} />}
        <button className='submit-btn' disabled={loading}>
          {loading ? <div className='button-spinner'></div> : 'Entrar'}
        </button>
      </form>
    </main>
  );
};

export default Login;
