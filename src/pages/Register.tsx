import { useState } from 'react';
import { validateRegisterForm } from '../utils/validation';
import ErrorMsgs from '../components/ErrorMsgs';
import NavigateButton from '../components/NavigateButton';

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
    setErrorMsgs({});

    const errors = validateRegisterForm(
      formData.name,
      formData.email,
      formData.password,
      formData.phone,
      formData.birthDate,
      formData.role,
    );

    setErrorMsgs(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validateForm()) {
      console.log('Dados enviados: ', formData);
      return;
    }
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

      <NavigateButton to='/' text="Login" />
    </main>
  );
};

export default Register;
