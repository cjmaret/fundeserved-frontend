import Image from 'next/image';
import {
  FundraiserCard,
  FundraiserParagraph,
  FundraiserImageWrapper,
  FundraiserTitle,
  FundraiserAmount,
} from './styles/styledFundraiser';
import { formatMoney } from '../lib/formatMoney';

export default function Fundraiser(card) {
  return (
    <FundraiserCard>
      <FundraiserImageWrapper>
        <Image src={card.image} alt="" layout="fill"/>
      </FundraiserImageWrapper>
      <FundraiserTitle>{card.title}</FundraiserTitle>
      <FundraiserParagraph>{card.paragraph}</FundraiserParagraph>
      <FundraiserAmount>${formatMoney(card.amount)} raised</FundraiserAmount>
    </FundraiserCard>
  );
}
