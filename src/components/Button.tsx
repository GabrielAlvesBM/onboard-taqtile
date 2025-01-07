interface ButtonProps {
  className: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
