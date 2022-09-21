import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import {
  FundraiserSection,
  Title,
  FundraiserInfo,
  Details,
  Sidebar,
  Image,
  Description,
  AmountGroup,
  AmountValue,
  AmountRaised,
  ButtonGroup,
  ShareButton,
  DonateButton,
  DonorList,
  DonorCard,
  DonorCardPhoto,
  DonorCardName,
  DonorCardAmount,
  DonorListSeeAllButton,
  DonorCardDetails,
  PercentageBarGroup,
  PercentageBar,
  PercentageBarFilled,
} from './styles/styledSingleFundraiser';
import { donors } from '../array-data/donors';
import { formatCentsToDollars } from '../lib/formatMoney';

const SINGLE_FUNDRAISER_QUERY = gql`
  query SINGLE_FUNDRAISER_QUERY($id: ID!) {
    Fundraiser(where: { id: $id }) {
      id
      name
      description
      status
      amount
      goal
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleFundraiser({ id }) {
  const { data, loading, error } = useQuery(SINGLE_FUNDRAISER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Fundraiser } = data;
  const FundraiserImageSource = Fundraiser.photo.image.publicUrlTransformed;

  return (
    <FundraiserSection>
      <Title>{Fundraiser.name}</Title>
      <FundraiserInfo>
        <Details>
          <Image src={FundraiserImageSource} alt="" />
          <Description>{Fundraiser.description}</Description>
        </Details>
        <Sidebar>
          <AmountGroup>
            <AmountRaised>
              {formatCentsToDollars(Fundraiser.amount)}
            </AmountRaised>{' '}
            raised of {formatCentsToDollars(Fundraiser.goal)} goal
          </AmountGroup>
          <PercentageBarGroup>
            <PercentageBarFilled
              filled={(Fundraiser.amount / Fundraiser.goal) * 100}
            />
            <PercentageBar />
          </PercentageBarGroup>
          <ButtonGroup>
            <ShareButton>Share</ShareButton>
            <DonateButton>Donate now</DonateButton>
          </ButtonGroup>
          <DonorList>
            {donors.map((donor, i) => (
              <DonorCard key={i}>
                <DonorCardPhoto src={donor.image} alt="" />
                <DonorCardDetails>
                  <DonorCardName>{donor.name}</DonorCardName>
                  <DonorCardAmount>Donated ${donor.amount}</DonorCardAmount>
                </DonorCardDetails>
              </DonorCard>
            ))}
          </DonorList>
          <DonorListSeeAllButton>See all</DonorListSeeAllButton>
        </Sidebar>
      </FundraiserInfo>
    </FundraiserSection>
  );
}
