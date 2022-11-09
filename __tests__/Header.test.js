import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Header from '../components/Header';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

describe('<Header />', () => {
  it('renders a minimal header when signed out', () => {
    const { container, debug } = render(
      <MockedProvider mocks={notSignedInMocks}>
        <Header />
      </MockedProvider>
    );
    expect(container).toHaveTextContent('Sign In');
    expect(container).toMatchSnapshot();
    const link = screen.getByText('Sign In');
    expect(link).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders a full header when signed in', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={signedInMocks}>
        <Header />
      </MockedProvider>
    );
    // wait until rerender with fetched data
    await screen.findByText('My Profile');
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Sign Out');
  });
});
