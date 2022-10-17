import HeroImage from '../images/hero.jpg';
import {
  HeroComponent,
  HeroDetails,
  HeroButton,
  HeroTitle,
  HeroImageWrapper,
} from './styles/styledHero';
import Link from 'next/link';

export default function Hero() {
  return (
    <HeroComponent>
      <HeroDetails>
        <HeroTitle>The undeserving need your help</HeroTitle>
        <Link href="/fundraisers">
          <HeroButton>Fund a shitty cause</HeroButton>
        </Link>
      </HeroDetails>
      <HeroImageWrapper>
        <img src={HeroImage} alt="hero-image" className="hero-image" />
    
      </HeroImageWrapper>
    </HeroComponent>
  );
}
