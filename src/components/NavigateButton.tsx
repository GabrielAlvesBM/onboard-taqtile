import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  to: string;
  text: string;
  className?: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ to, text, className }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(to);
  }

  return (
    <button className={`navigate-btn ${className || ''}`} onClick={handleNavigate}>
      {text}
    </button>
  );
};

export default NavigateButton;
