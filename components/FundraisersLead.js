import Link from 'next/link';
import {
  FundraisersLeadComponent,
  FundraisersTitle,
  FundraisersSubtitle,
  CreateFundraiserButton,
} from './styles/styledFundraisersLead';

export default function FundraisersLead() {
  return (
    <FundraisersLeadComponent>
      <FundraisersTitle>Browse fundraisers</FundraisersTitle>
      <FundraisersSubtitle>
        A fool and their money are soon parted.
      </FundraisersSubtitle>
      <Link href="/create-fundraiser">
        <CreateFundraiserButton>Start a GoFundYourself</CreateFundraiserButton>
      </Link>
    </FundraisersLeadComponent>
  );
}
