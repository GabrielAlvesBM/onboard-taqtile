interface ErrorMsgsProps {
  errorMsgs: string[] | null;
}

const ErrorMsgs: React.FC<ErrorMsgsProps> = ({ errorMsgs }) => {
  return (
    <>
      {errorMsgs && errorMsgs.length > 0 && (
        <div className='error-messages'>
          {errorMsgs.map((msg, index) => (
            <p key={index} className='error-message'>
              {msg}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default ErrorMsgs;
