import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import SingleFundraiser, {
  SINGLE_FUNDRAISER_QUERY,
} from '../components/SingleFundraiser';
import { fakeFundraiser } from '../lib/testUtils';

const fundraiser = fakeFundraiser();

const mocks = [
  {
    request: {
      query: SINGLE_FUNDRAISER_QUERY,
      variables: {
        id: '123',
      },
    },
    result: {
      data: {
        Fundraiser: fundraiser,
      },
    },
  },
];

describe('<SingleFundraiser', () => {
  it('renders with proper data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleFundraiser id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('single-fundraiser');
    expect(container).toMatchSnapshot();
  });

  it('errors out when an item is not found', async () => {
    const errorMock = [
      {
        request: {
          query: SINGLE_FUNDRAISER_QUERY,
          variables: {
            id: '123',
          },
        },
        result: {
          errors: [{ message: 'Fundraiser not found!' }],
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleFundraiser id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('graphql-error');
    expect(container).toHaveTextContent('Fundraiser not found!');
  });
});
