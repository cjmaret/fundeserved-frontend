import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        name
        email
        createdOn
        avatar {
          publicUrlTransformed
        }
        fundraisers(sortBy: dateCreated_DESC) {
          id
          name
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
        donations(sortBy: dateCreated_DESC) {
          id
          total
          dateCreated
          fundraiser {
            id
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
