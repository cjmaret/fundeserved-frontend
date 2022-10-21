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
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  label {
    display: block;
    margin: 2rem 0;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  textarea {
    white-space: pre-wrap;
  }
  button,
  input[type='submit'] {
    width: 45%;
    background: var(--red);
    color: white;
    border: 0;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    transition: opacity 0.4s ease;
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
        var(--red) 0%,
        white 50%,
        var(--red) 100%
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
`;

export const AuthForm = styled(Form)`
  margin: 50px 0 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
`;

export const ChangeFormButton = styled.a`
  color: var(--red);
  transition: opacity 0.4s ease;
  border: none;
  background: none;
  text-align: right;
  top: 10px;
  right: 10px;
  position: absolute;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    text-decoration: none;
  }
`;
