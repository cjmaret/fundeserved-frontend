import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile from '../components/Profile';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const user = fakeUser();

const notSignedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: {
      data: {
        authenticatedItem: null,
      },
    },
  },
];

const signedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: {
      data: {
        authenticatedItem: user,
      },
    },
  },
];

describe('<Profile />', () => {
  it('redirects user when user not signed in', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn>
          <Profile />
        </PleaseSignIn>
      </MockedProvider>
    );
    await screen.findByText('Sign in to your account');
    debug()
  });

  it('renders with proper data when signed in', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn>
          <Profile />
        </PleaseSignIn>
      </MockedProvider>
    );
    await screen.findByText('Miss Coleman Berge');
    const userName = screen.getByText('Miss Coleman Berge');
    expect(userName).toBeInTheDocument();
    const userAvatar = screen.getByAltText('avatar');
    expect(userAvatar).toHaveAttribute('src', 'colin.jpg');
    debug();
  });
});
