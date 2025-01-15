import { useNavigate } from 'react-router-dom';

const RegisterPageButton = () => {
  const navigate = useNavigate();

  return (
    <button className='register-page-button' onClick={() => navigate('/register')}>
      <span>+</span>
    </button>
  );
};

export default RegisterPageButton;
