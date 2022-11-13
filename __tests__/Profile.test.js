import { MockedProvider } from '@apollo/react-testing';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import wait from 'waait';
import DisplayError from '../components/ErrorMessage';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile, {
  UPDATE_USER_NO_AVATAR_MUTATION,
  UPDATE_USER_WITH_AVATAR_MUTATION,
} from '../components/Profile';
import { CloseIcon } from '../components/styles/styledModal';
import { EditForm, EditModal } from '../components/styles/styledProfile';
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

  it('updates user profile text', async () => {
    const mocks = [
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
      {
        request: {
          query: UPDATE_USER_NO_AVATAR_MUTATION,
          variables: {
            id: user.id,
            name: 'Harvey',
            email: 'harvey@example.com',
          },
        },
        result: {
          data: {
            updateUser: {
              ...user,
              name: 'Harvey',
              email: 'harvey@example.com',
            },
          },
        },
      },
    ];

    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <Profile />
      </MockedProvider>
    );
    await screen.findByText('Miss Coleman Berge');
    screen.getByText(/update profile/i);
    userEvent.clear(screen.getByPlaceholderText(/name/i));
    userEvent.clear(screen.getByPlaceholderText(/email/i));
    userEvent.type(screen.getByPlaceholderText(/name/i), 'Harvey');
    userEvent.type(screen.getByPlaceholderText(/email/i), 'harvey@example.com');
    userEvent.click(screen.getByText(/update profile/i));
    await waitFor(() => wait(500));
    const name = container.querySelector('h2');
    screen.getByText('Harvey');
    expect(name).toHaveTextContent('Harvey');
  });

  it('updates user profile avatar', async () => {
    const mocks = [
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
      {
        request: {
          query: UPDATE_USER_WITH_AVATAR_MUTATION,
          variables: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: {
              publicUrlTransformed: 'harvey.jpg',
            },
          },
        },
        result: {
          data: {
            updateUser: {
              ...user,
              avatar: {
                publicUrlTransformed: 'harvey.jpg',
              },
            },
          },
        },
      },
    ];

    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <Profile />
      </MockedProvider>
    );
    await screen.findByText('Miss Coleman Berge');
    screen.getByText(/update profile/i);
    userEvent.clear(screen.getByPlaceholderText(/name/i));
    userEvent.clear(screen.getByPlaceholderText(/email/i));
    userEvent.type(screen.getByPlaceholderText(/name/i), 'Harvey');
    userEvent.type(screen.getByPlaceholderText(/email/i), 'harvey@example.com');
    userEvent.click(screen.getByText(/update profile/i));
    await waitFor(() => wait(500));
    const name = container.querySelector('h2');
    screen.getByText('Harvey');
    expect(name).toHaveTextContent('Harvey');
  });
});
