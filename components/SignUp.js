import { AuthForm, ChangeFormButton } from './styles/styledForm';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';
import Router from 'next/router';

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { data, error: signupError, loading: signupLoading }] =
    useMutation(SIGNUP_MUTATION, {
      variables: inputs,
    });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup()
      .then((res) => {
        resetForm();
        Router.push({
          pathname: '/sign-in',
        });
      })
      .catch((err) => console.error(err));
  }

  return (
    <AuthForm method="POST" onSubmit={handleSubmit}>
      <ChangeFormButton href="/sign-in">Sign In</ChangeFormButton>
      <h2>Sign up for an account</h2>
      <DisplayError error={signupError}></DisplayError>
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please go ahead and sign in
          </p>
        )}
        <label htmlFor="name">
          Name
          <input
            type="name"
            name="name"
            placeholder="Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
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
        <button type="submit">Sign Up</button>
      </fieldset>
    </AuthForm>
  );
}
