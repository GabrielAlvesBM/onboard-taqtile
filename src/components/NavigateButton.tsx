import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  to: string;
  text: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ to, text }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(to);
  }

  return (
    <button className="navigate-btn" onClick={handleNavigate}>
      {text}
    </button>
  );
};

export default NavigateButton;
