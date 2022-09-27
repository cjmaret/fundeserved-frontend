import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { featuredCards } from '../array-data/featured-data';
import Fundraiser from './Fundraiser';
import {
  CreateFundraiserButton,
  FundraisersGrid,
  FundraisersLead,
  FundraisersSubtitle,
  FundraisersTitle,
} from './styles/styledFundraisers';

export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY {
    allFundraisers {
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

export default function AllFundraisers() {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <FundraisersLead>
        <FundraisersTitle>Browse fundraisers</FundraisersTitle>
        <FundraisersSubtitle>
          There's always something stupid to give your money to.
        </FundraisersSubtitle>
        <Link href="/create-fundraiser">
          <CreateFundraiserButton>Start a Fundeserved</CreateFundraiserButton>
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
