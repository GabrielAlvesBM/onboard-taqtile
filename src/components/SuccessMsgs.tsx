interface SuccessMsgsProps {
  successMsgs: string[] | null;
}

const SuccessMsgs: React.FC<SuccessMsgsProps> = ({ successMsgs }) => {
  return (
    <>
      {successMsgs && successMsgs.length > 0 && (
        <div className='success-messages'>
          {successMsgs.map((msg, index) => (
            <p key={index} className='success-message'>
              {msg}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default SuccessMsgs;
