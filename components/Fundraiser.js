import Image from 'next/image';
import Link from 'next/link';
import {
  FundraiserCard,
  FundraiserParagraph,
  FundraiserImageWrapper,
  FundraiserTitle,
  FundraiserAmount,
} from './styles/styledFundraiser';
import { formatCentsToDollars } from '../lib/formatMoney';

export default function Fundraiser({ fundraiser }) {
  const fundraiserImage = fundraiser?.photo.image.publicUrlTransformed;
  return (
    <FundraiserCard>
      <FundraiserImageWrapper>
        <img src={fundraiserImage} alt="" className="fundraiser-image" />
      </FundraiserImageWrapper>
      <FundraiserTitle>
        <Link href={`/fundraiser/${fundraiser.id}`}>{fundraiser?.name}</Link>
      </FundraiserTitle>
      <FundraiserParagraph>{fundraiser?.description}</FundraiserParagraph>
      <FundraiserAmount>
        {formatCentsToDollars(fundraiser?.price)} raised
      </FundraiserAmount>
    </FundraiserCard>
  );
}
