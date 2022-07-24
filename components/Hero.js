import HeroImage from '../images/hero.jpg';
import Image from 'next/image';
import { HeroComponent, HeroDetails, HeroButton, HeroTitle } from './styles/styledHero';
import Link from 'next/link';

export default function Hero() {
  return (
    <HeroComponent>
      <HeroDetails>
        <HeroTitle>The undeserving need your help</HeroTitle>
        <Link href="/mario">
          <HeroButton>Fund a shitty cause</HeroButton>
        </Link>
      </HeroDetails>
        <Image src={HeroImage} alt="hero-image" className="hero-image"></Image>
        <style jsx global>{`
          .hero-image {
            border-radius: 2rem;
          }
        `}</style>
    </HeroComponent>
  );
}
