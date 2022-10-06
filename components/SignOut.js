import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const SignOutButton = styled.button`
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: var(--black);
  &:hover {
    cursor: pointer;
  }
`;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;
export default function SignOut() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <SignOutButton type="button" onClick={signout}>
      Sign Out
    </SignOutButton>
  );
}
