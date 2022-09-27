import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import Fundraiser from './Fundraiser';
import { CreateFundraiserButton, FundraisersGrid, FundraisersLead, FundraisersSubtitle, FundraisersTitle } from './styles/styledFundraisers';

// change to only user-created fundraisers later
export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY {
    allFundraisers {
      id
      name
      amount
      description
      amount
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

export default function MyFundraisers() {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY);

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
          <CreateFundraiserButton>Start another Fundeserved</CreateFundraiserButton>
        </Link>
      </FundraisersLead>
      <FundraisersGrid>
        {data.allFundraisers.map((fundraiser) => (
          <Fundraiser key={fundraiser.id} fundraiser={fundraiser} />
        ))}
      </FundraisersGrid>
    </>
  );
}
