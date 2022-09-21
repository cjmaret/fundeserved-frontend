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
} from './styles/styledFooter';
import LogoImage from '../images/logo.jpg';

export default function Footer() {
  return (
    <FooterComponent>
      <Logo>
        <img src={LogoImage} alt="" className="footer-logo-image" />
      </Logo>
      <ListGroup>
        <FundraiseList>
          <ListTitle>Fundraise for</ListTitle>
          <ListItem>
            <ListLink>Medical</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Emergency</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Memorial</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Education</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Nonprofit</ListLink>
          </ListItem>
        </FundraiseList>
        <LearnMoreList>
          <ListTitle>Learn more</ListTitle>
          <ListItem>
            <ListLink>How Fundeserved works</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Common questions</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Success stories</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Supported countries</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Pricing</ListLink>
          </ListItem>
        </LearnMoreList>
        <ResourcesList>
          <ListTitle>Resources</ListTitle>
          <ListItem>
            <ListLink>Help center</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Blog</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Press center</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>Careers</ListLink>
          </ListItem>
          <ListItem>
            <ListLink>About</ListLink>
          </ListItem>
        </ResourcesList>
      </ListGroup>
      <RightsReserved>2022 All Rights Reserved</RightsReserved>
    </FooterComponent>
  );
}
