import { useState } from 'react';
import ErrorMsgs from '../components/ErrorMsgs';

enum Roles {
  USER = 'user',
  ADMIN = 'admin',
}

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  role: Roles | '';
}

const Register = () => {
  const [errorMsgs, setErrorMsgs] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    role: Roles.USER,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  function validateForm(): boolean {
    const newErrorMsgs: Record<string, string> = {};
    setErrorMsgs({});

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    const phoneRegex = /^\d{10,11}$/;

    if (!formData.name) {
      newErrorMsgs.name = 'Insira um nome.';
    } else if (!/^\w+\s+\w+/.test(formData.name)) {
      newErrorMsgs.name = 'O nome deve conter pelo menos 2 palavras.';
    }

    if (!formData.email) {
      newErrorMsgs.email = 'Insira um Email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrorMsgs.email = "Email inválido. O formato correto é 'usuario@dominio.com'.";
    }

    if (formData.password.length < 7) {
      newErrorMsgs.password = 'Senha inválida. Deve conter pelo menos 7 caracteres.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrorMsgs.password = 'Senha inválida. Deve conter pelo menos 1 letra e 1 número.';
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrorMsgs.phone = 'O telefone deve conter apenas dígitos e ter 10 ou 11 números.';
    }

    const today = new Date();
    const birthDate = new Date(formData.birthDate);
    const minDate = new Date('1900-01-01');
    if (!formData.birthDate) {
      newErrorMsgs.birthDate = 'Insira uma data de nascimento.';
    } else if (birthDate > today) {
      newErrorMsgs.birthDate = 'A data de nascimento não pode ser no futuro.';
    } else if (birthDate < minDate) {
      newErrorMsgs.birthDate = 'A data de nascimento não pode ser anterior a 01/01/1900.';
    }

    if (!Object.values(Roles).includes(formData.role as Roles)) {
      newErrorMsgs.roles = 'Selecione um cargo válido.';
    }

    setErrorMsgs(newErrorMsgs);
    return Object.keys(newErrorMsgs).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validateForm()) {
      console.log('Dados enviados: ', formData);
      return;
    }

    console.log('Dados enviados: ', formData);
    console.log(Object.entries(errorMsgs));
    console.error('erro');
  }

  return (
    <main>
      <h1>Adicionar Novo Usuário:</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-div'>
          <input
            className='input'
            id='name'
            type='text'
            placeholder='Nome Completo'
            autoComplete='off'
            value={formData.name}
            onChange={handleInputChange}
          />
          {errorMsgs.name && <ErrorMsgs errorMsgs={{ name: errorMsgs.name }} />}
        </div>
        <div className='input-div'>
          <input
            className='input'
            id='email'
            type='text'
            placeholder='Email'
            autoComplete='off'
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMsgs.password && <ErrorMsgs errorMsgs={{ password: errorMsgs.password }} />}
        </div>
        <div className='input-div'>
          <input
            className='input'
            id='phone'
            type='text'
            placeholder='Telefone'
            autoComplete='off'
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errorMsgs.phone && <ErrorMsgs errorMsgs={{ phone: errorMsgs.phone }} />}
        </div>
        <div className='input-div'>
          <input
            className='input'
            id='birthDate'
            type='date'
            placeholder='Data de Nascimento'
            autoComplete='off'
            value={formData.birthDate}
            onChange={handleInputChange}
          />
          {errorMsgs.birthDate && <ErrorMsgs errorMsgs={{ birthDate: errorMsgs.birthDate }} />}
        </div>
        <div className='input-div'>
          <select className='select' id='role' value={formData.role} onChange={handleInputChange}>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
          {errorMsgs.role && <ErrorMsgs errorMsgs={{ role: errorMsgs.role }} />}
        </div>

        <button className='submit-btn'>Registrar</button>
      </form>
    </main>
  );
};

export default Register;
