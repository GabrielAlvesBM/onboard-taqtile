interface ErrorMsgsProps {
  errorMsgs: Record<string, string> | null;
}

const ErrorMsgs: React.FC<ErrorMsgsProps> = ({ errorMsgs }) => {
  return (
    <>
      {errorMsgs && Object.keys(errorMsgs).length > 0 && (
        <div className='error-messages'>
          {Object.entries(errorMsgs).map(([key, msg]) => (
            <p key={key} className='error-message'>
              {msg}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default ErrorMsgs;
