import HeroImage from '../images/hero.jpg';
import {
  HeroComponent,
  HeroDetails,
  HeroButton,
  HeroTitle,
  HeroImageWrapper,
  FlamingoImage,
  FlamingoImage5,
  HeroContentGroup,
} from './styles/styledHero';
import Link from 'next/link';
import FlamHeroImage from '../images/flam-heroes/flam-hero-3.png';
import FlamHeroImage5 from '../images/flam-heroes/flam-hero-5.png';

export default function Hero() {
  return (
    <HeroComponent>
      <HeroContentGroup>
        <HeroDetails>
          <HeroTitle>
            Fundraise for the absolute worst causes imaginable
          </HeroTitle>
          <Link href="/fundraisers">
            <HeroButton>Fund an awful cause</HeroButton>
          </Link>
        </HeroDetails>
        {/* <HeroImageWrapper>
        <img src={HeroImage} alt="hero-image" className="hero-image" />
      </HeroImageWrapper> */}
        {/* <FlamingoImage src={FlamHeroImage} alt="" /> */}
        <FlamingoImage5 src={FlamHeroImage5} alt="" />
      </HeroContentGroup>
    </HeroComponent>
  );
}
