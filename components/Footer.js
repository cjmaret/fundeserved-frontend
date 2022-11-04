import Image from 'next/image';
import {
  FooterComponent,
  ListGroup,
  FundraiseList,
  LearnMoreList,
  ListItem,
  ListTitle,
  ListLink,
  Logo,
  ResourcesList,
  RightsReserved,
  NavLink,
} from './styles/styledFooter';
import LogoImage from '../images/logo.jpg';
import FooterLogo from '../images/header-logo-2.png';
import Link from 'next/link';

const fundraiserForLinks = [
  'My Benefit',
  "Someone Else's Loss",
  'Fraud/Deceit',
  'Mean Spirited Prank',
  'A Good Cause (As If, Right?)',
];

const learnMoreLinks = [
  'How GoFundYourself works',
  'Common questions',
  'Success stories',
  'Supported countries',
];

const resourcesLinks = [
  'Help center',
  'Blog',
  'Press center',
  'Careers',
  'About',
];

export default function Footer() {
  return (
    <FooterComponent>
      <Logo>
        <Link href="/">
          <NavLink className="logo__anchor">
            <img src={FooterLogo} alt="" className="footer-logo-image" />
          </NavLink>
        </Link>
      </Logo>
      <ListGroup>
        <FundraiseList>
          <ListTitle>Fundraise for</ListTitle>
          {fundraiserForLinks.map((link, i) => (
            <ListItem key={i}>
              <ListLink href="/">{link}</ListLink>
            </ListItem>
          ))}
        </FundraiseList>
        <LearnMoreList>
          <ListTitle>Learn more</ListTitle>
          {learnMoreLinks.map((link, i) => (
            <ListItem key={i}>
              <ListLink href="/learn-more">{link}</ListLink>
            </ListItem>
          ))}
        </LearnMoreList>
        <ResourcesList>
          <ListTitle>Resources</ListTitle>
          {resourcesLinks.map((link, i) => (
            <ListItem key={i}>
              <ListLink href="/learn-more">{link}</ListLink>
            </ListItem>
          ))}
        </ResourcesList>
      </ListGroup>
      <RightsReserved>2022 All Rights Reserved</RightsReserved>
    </FooterComponent>
  );
}
