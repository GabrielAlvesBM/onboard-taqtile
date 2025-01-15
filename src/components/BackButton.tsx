import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <button className='back-btn' onClick={handleGoBack}>
      Voltar
    </button>
  );
};

export default BackButton;
