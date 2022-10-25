import Link from 'next/link';
import {
  FundraisersLeadComponent,
  FundraisersTitle,
  FundraisersSubtitle,
  CreateFundraiserButton,
} from './styles/styledFundraisersLead';

const allFundraisersLeadData = {
  title: 'Browse fundraisers',
  subtitle: `There's always something stupid to give your money to`,
  button: 'Start a GoFundYourself',
};

const myFundraisersLeadData = {
  title: 'My fundraisers',
  subtitle: `Keep asking for money, you little entrepreneur, you.`,
  button: 'Start a GoFundYourself',
};

export default function FundraisersLead({ pathname }) {
  const leadData =
    pathname === '/my-fundraisers'
      ? myFundraisersLeadData
      : allFundraisersLeadData;

  return (
    <FundraisersLeadComponent>
      <FundraisersTitle>{leadData.title}</FundraisersTitle>
      <FundraisersSubtitle>{leadData.subtitle}</FundraisersSubtitle>
      <Link href="/create-fundraiser">
        <CreateFundraiserButton>{leadData.button}</CreateFundraiserButton>
      </Link>
    </FundraisersLeadComponent>
  );
}
