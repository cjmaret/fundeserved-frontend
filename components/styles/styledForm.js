import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  width: 50%;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  border: 5px solid white;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  max-width: 450px;
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
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
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
    &[disabled] {
      opacity: 0.6;
      background: gray;
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
        var(--offWhite) 50%,
        var(--red) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .button-group {
    display: flex;
    justify-content: space-between;
  }
`;

export default Form;
