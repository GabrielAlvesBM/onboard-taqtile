import styled from 'styled-components';

export const Title = styled.h1`
  margin: 20px auto;
  font-size: 24px;
  font-weight: bold;
  color: var(--white-color);
`;

export const Button = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--button-background);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;

  div {
    width: 100%;
  }

  input {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    border-radius: 7.5px;
    border: none;
    background-color: var(--input-color);
  }

  button {
    font-size: 16px;
  }
`;
