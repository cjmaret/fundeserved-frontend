import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { featuredCards } from '../array-data/featured-data';
import Fundraiser from './Fundraiser';

export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY {
    allFundraisers {
      id
      name
      amount
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Fundraisers() {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {data.allFundraisers.map((fundraiser) => (
        <Fundraiser key={fundraiser.id} fundraiser={fundraiser} />
      ))}
    </>
  );
}

/* {featuredCards.map((card) => (
  <Fundraiser key={card.id} {...card} />
))} */
