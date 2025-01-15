import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMsgs from '../components/ErrorMsgs';
import SuccessMsgs from '../components/SuccessMsgs';
import { useMutation } from '@apollo/client';
import { MutationLogin } from '../apollo/mutations/login';
import RegisterPageButton from '../components/RegisterPageButton';

const Login = () => {
  const navigate = useNavigate();
  const [errorMsgs, setErrorMsgs] = useState<Record<string, string>>({});
  const [successMsgs, setSuccessMsgs] = useState<string[] | null>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const [mutationLogin, { loading }] = useMutation(MutationLogin, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      setSuccessMsgs(['Login efetuado com sucesso!']);
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

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    setErrorMsgs({});
    setSuccessMsgs(null);

    let newErrorMsgs: Record<string, string> = {};

    if (!emailInput) {
      newErrorMsgs.email = 'Insira um Email.';
    } else if (!emailRegex.test(emailInput)) {
      newErrorMsgs.email = "Email inválido. O formato correto é 'usuario@dominio.com'.";
    }

    if (passwordInput.length < 7) {
      newErrorMsgs.password = 'Senha inválida. Deve conter pelo menos 7 caracteres.';
    } else if (!passwordRegex.test(passwordInput)) {
      newErrorMsgs.password = 'Senha inválida. Deve conter pelo menos 1 letra e 1 número.';
    }

    if (Object.keys(newErrorMsgs).length > 0) {
      setErrorMsgs(newErrorMsgs);
    } else {
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
        <SuccessMsgs successMsgs={successMsgs} />

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
