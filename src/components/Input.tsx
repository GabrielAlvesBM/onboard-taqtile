interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value }) => {
  return <input className='login__input' type={type} placeholder={placeholder} value={value} />;
};

export default Input;
