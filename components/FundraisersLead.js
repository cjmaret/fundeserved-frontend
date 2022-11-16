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
        <em>"Be the lack of change you wish to see in the world"</em>
      </FundraisersSubtitle>
      <Link href="/create-fundraiser">
        <CreateFundraiserButton>Start a GoFundYourself</CreateFundraiserButton>
      </Link>
    </FundraisersLeadComponent>
  );
}
