import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import FundraiserCard from './FundraiserCard';
import { perPage } from '../config';

export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY($skip: Int = 0, $first: Int) {
    allFundraisers(first: $first, skip: $skip, sortBy: dateCreated_ASC) {
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

const FundraisersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 95%;
  background-color: rgba(235, 235, 235, 0.3);
  padding: 1rem;
  max-width: 1080px;
  @media (min-width: 750px) {
    gap: 30px;

    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function Fundraisers({ page }) {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <FundraisersGrid>
      {data?.allFundraisers.map((fundraiser) => (
        <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
      ))}
    </FundraisersGrid>
  );
}
