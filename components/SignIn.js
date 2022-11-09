import {
  AuthForm,
  ChangeFormButton,
  ChangeFormButtonGroup,
  RequestResetButton,
} from './styles/styledForm';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './ErrorMessage';
import Router from 'next/router';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, error: signinError, loading: signinLoading }] =
    useMutation(SIGNIN_MUTATION, {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });

  async function handleSubmit(e) {
    e.preventDefault();
    await signin()
      .then((res) => {
        console.log(res.data);
        if (res.data.authenticateUserWithPassword.item) {
          Router.push({
            pathname: `/`,
          });
        }
        resetForm();
      })
      .catch((err) => console.error(err));
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <AuthForm method="POST" onSubmit={handleSubmit}>
      <ChangeFormButton href="/sign-up">Sign Up</ChangeFormButton>
      <h2>Sign in to your account</h2>
      <DisplayError error={error}></DisplayError>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
        <RequestResetButton href="/request-reset">Forgot your password?</RequestResetButton>
      </fieldset>
    </AuthForm>
  );
}
