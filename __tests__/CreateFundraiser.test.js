import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import Router from 'next/router';
import CreateFundraiser, {
  CREATE_FUNDRAISER_MUTATION,
} from '../components/CreateFundraiser';
import { fakeFundraiser, makePaginationMocksFor } from '../lib/testUtils';
import { ALL_FUNDRAISERS_QUERY } from '../components/Fundraisers';
import wait from 'waait';
import { formatCentsToDollars, formatDollarsToCents } from '../lib/formatMoney';

const fundraiser = fakeFundraiser();

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('<CreateFundraiser/>', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <CreateFundraiser />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it('handles the updating', async () => {
    const { container } = render(
      <MockedProvider>
        <CreateFundraiser />
      </MockedProvider>
    );
    await userEvent.type(screen.getByPlaceholderText(/name/i), fundraiser.name);
    await userEvent.type(
      screen.getByPlaceholderText(/description/i),
      fundraiser.description
    );
    await userEvent.type(
      screen.getByPlaceholderText(/goal/i),
      fundraiser.goal.toString()
    );
    expect(screen.getByDisplayValue(fundraiser.name)).toBeInTheDocument();
  });

  it('creates the items when the form is submitted', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_FUNDRAISER_MUTATION,
          variables: {
            name: fundraiser.name,
            description: fundraiser.description,
            image: '',
            goal: formatDollarsToCents(fundraiser.goal),
          },
        },
        result: {
          data: {
            createFundraiser: {
              ...fundraiser,
              id: 'abc123',
            },
          },
        },
      },
      {
        request: {
          query: ALL_FUNDRAISERS_QUERY,
          variables: { skip: 0, first: 2 },
        },
        result: {
          data: {
            allFundraisers: [fundraiser],
          },
        },
      },
    ];

    const { container, debug } = render(
      <MockedProvider mocks={mocks} removeTypename={true}>
        <CreateFundraiser />
      </MockedProvider>
    );
    await userEvent.type(screen.getByPlaceholderText(/Name/i), fundraiser.name);
    await userEvent.type(
      screen.getByPlaceholderText(/Goal/i),
      fundraiser.goal.toString()
    );
    await userEvent.type(
      screen.getByPlaceholderText(/Description/i),
      fundraiser.description
    );
    // Submit it and see if the page change has been called
    await userEvent.click(screen.getByText(/Create Fundraiser/));
    await waitFor(() => wait(0));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      pathname: '/fundraiser/abc123',
    });
  });
});
