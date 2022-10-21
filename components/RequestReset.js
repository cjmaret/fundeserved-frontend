import { AuthForm } from './styles/styledForm';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [reset, { data, error: resetError, loading: resetLoading }] =
    useMutation(REQUEST_RESET_MUTATION, {
      variables: inputs,
    });

  async function handleSubmit(e) {
    e.preventDefault();
    await reset()
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => console.error(err));
  }

  return (
    <AuthForm method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>
      <DisplayError error={resetError}></DisplayError>
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link</p>
        )}
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
        <button type="submit">Sign In</button>
      </fieldset>
    </AuthForm>
  );
}
