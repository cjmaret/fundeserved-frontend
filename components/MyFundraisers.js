import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import FundraiserCard from './FundraiserCard';
import { perPage } from '../config';
import {
  CreateFundraiserButton,
  FundraisersGrid,
  FundraisersLead,
  FundraisersSubtitle,
  FundraisersTitle,
} from './styles/styledFundraisers';

// change to only user-created fundraisers later
export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY($skip: Int = 0, $first: Int) {
    allFundraisers(first: $first, skip: $skip) {
      id
      name
      amount
      description
      goal
      dateCreated
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function MyFundraisers({ page }) {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <FundraisersLead>
        <FundraisersTitle>My fundraisers</FundraisersTitle>
        <FundraisersSubtitle>
          Keep asking for money, you little entrepreneur, you.
        </FundraisersSubtitle>
        <Link href="/create-fundraiser">
          <CreateFundraiserButton>
            Start another Fundeserved
          </CreateFundraiserButton>
        </Link>
      </FundraisersLead>
      <FundraisersGrid>
        {data.allFundraisers.map((fundraiser) => (
          <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
        ))}
      </FundraisersGrid>
    </>
  );
}
