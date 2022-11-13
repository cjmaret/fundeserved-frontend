import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import FundraiserCard from '../components/FundraiserCard';
import { fakeFundraiser } from '../lib/testUtils';

const fundraiser = fakeFundraiser();

describe('<FundraiserCard/>', () => {
  it('renders out price tag, link, and title', () => {
    const { container, debug } = render(
      <MockedProvider>
        <FundraiserCard fundraiser={fundraiser} />
      </MockedProvider>
    );
    const amountRaised = screen.getByText('$5 raised');
    expect(amountRaised).toBeInTheDocument();
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/fundraiser/abc123');
    const title = container.querySelector('h1');
    expect(title).toHaveTextContent('test-fundraiser');
  });

  it('renders and matches the snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <FundraiserCard fundraiser={fundraiser} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders the image properly', () => {
    const { container, debug } = render(
      <MockedProvider>
        <FundraiserCard fundraiser={fundraiser} />
      </MockedProvider>
    );
    const img = screen.getByAltText(fundraiser.name);
    expect(img).toBeInTheDocument();
  });
});
