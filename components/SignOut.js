import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';
import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';

const SignOutButton = styled.button`
  border: none;
  font-size: ${props => props.mobileWidth ? '2rem' : '1.5rem'};
  background-color: transparent;
  color: var(--grey);
  padding: 0;
  margin: 1rem 0;
  line-height: 1;
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
  const mobileWidth = useContext(MobileContext);
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <SignOutButton type="button" onClick={signout} mobileWidth={mobileWidth}>
      Sign Out
    </SignOutButton>
  );
}
