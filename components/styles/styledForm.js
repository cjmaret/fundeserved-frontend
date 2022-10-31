import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 450px;
  position: relative;
  margin: 0;
  label {
    display: block;
    margin: 1rem 0;
    width: 100%;
  }
  input,
  textarea,
  select {
    width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: 'Lato';
    font-size: 1rem;
    resize: none;
    &:focus {
      outline: 0;
      border-color: var(--salmon);
    }
    @media (min-width: 500px) {
      font-size: 2rem;
    }
  }
  textarea {
    white-space: pre-wrap;
  }
  button,
  input[type='submit'] {
    width: 45%;
    background: var(--salmon);
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    transition: opacity 0.4s ease;
    margin-top: 2rem;
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
    &[disabled] {
      opacity: 0.6;
      background: gray;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--salmon) 0%,
        white 50%,
        var(--salmon) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const AuthForm = styled(Form)`
  margin: 50px 0 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
`;

export const ChangeFormButton = styled.a`
  color: var(--salmon);
  transition: opacity 0.4s ease;
  border: none;
  background: none;
  text-align: right;
  font-size: 1.2rem;
  top: 10px;
  right: 10px;
  position: absolute;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    text-decoration: none;
  }
`;

export const RequestResetButton = styled(ChangeFormButton)`
  position: static;
  margin-top: 0.5rem;
  line-height: 1;
  width: 100%;
  text-align: center;
`;

export const ModalForm = styled(Form)`
  position: relative;
  background-color: white;
  width: 95%;
  @media (min-width: 850px) {
    width: 100%;
  }
`;
