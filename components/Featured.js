import {
  FeaturedComponent,
  FeaturedTitle,
  FeaturedParagraph,
  FeaturedTitleGroup,
  FeaturedContentGroup,
} from './styles/styledFeatured';
import { gql, useQuery } from '@apollo/client';
import KeenSlider from './KeenSlider';

export const ALL_FUNDRAISERS_QUERY = gql`
  query ALL_FUNDRAISERS_QUERY {
    allFundraisers(skip: 0, first: 7, sortBy: dateCreated_ASC) {
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

export default function Featured() {
  const { data, error, loading } = useQuery(ALL_FUNDRAISERS_QUERY);

  return (
    <FeaturedComponent>
      <FeaturedContentGroup>
        <FeaturedTitleGroup>
          <FeaturedTitle>
            GoFundYourself <span>Spotlight</span>
          </FeaturedTitle>
          <FeaturedParagraph>
            Featuring some of our least deserving fundraisers
          </FeaturedParagraph>
        </FeaturedTitleGroup>
        <KeenSlider data={data} />
      </FeaturedContentGroup>
    </FeaturedComponent>
  );
}
