import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import {
  FundraiserCardComponent,
  FundraiserParagraph,
  FundraiserImageWrapper,
  FundraiserTitle,
  FundraiserAmount,
  PercentageBarGroup,
  PercentageBarFilled,
  PercentageBar,
  FundraiserDetails,
  AmountSpan,
  CreatedOn,
  FundraiserLink,
} from './styles/styledFundraiserCard';
import { formatCentsToDollars } from '../lib/formatMoney';

export default function FundraiserCard({ fundraiser }) {
  const mobileWidth = useContext(MobileContext);
  const fundraiserImage = fundraiser?.photo?.image?.publicUrlTransformed;

  function convertDate() {
    if (fundraiser.dateCreated) {
      const date = new Date(fundraiser.dateCreated?.toString());
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  }

  return (
    <FundraiserCardComponent>
      <FundraiserLink href={`/fundraiser/${fundraiser.id}`} />
      <FundraiserImageWrapper>
        <img src={fundraiserImage} alt="" className="fundraiser-image" />
      </FundraiserImageWrapper>
      <FundraiserDetails>
        <FundraiserTitle>{fundraiser.name}</FundraiserTitle>
        <FundraiserParagraph>{fundraiser?.description}</FundraiserParagraph>
        <CreatedOn>Created on {convertDate()}</CreatedOn>
        <PercentageBarGroup>
          <PercentageBarFilled
            filled={(fundraiser.amount / fundraiser.goal) * 100}
          />
          <PercentageBar />
        </PercentageBarGroup>
        <FundraiserAmount>
          <AmountSpan>
            {formatCentsToDollars(fundraiser?.amount)} raised{' '}
          </AmountSpan>
          of {formatCentsToDollars(fundraiser.goal)}
        </FundraiserAmount>
      </FundraiserDetails>
    </FundraiserCardComponent>
  );
}
