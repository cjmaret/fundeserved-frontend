import {
  FeaturedComponent,
  FeaturedTitle,
  FeaturedParagraph,
  MainCard,
  Card,
  CardImageWrapper,
  CardDetails,
  CardTitle,
  CardParagraph,
  CardGroup,
  ReadMore,
} from './styles/styledFeatured';

import Image from 'next/image';
import { featuredCards } from '../array-data/featured-data';
import { useContext } from 'react';
import { MobileContext } from '../contexts/mobileContext';

export default function Featured() {
  const mobileMenu = useContext(MobileContext);

  const mainCard = featuredCards[0];

  return (
    <FeaturedComponent>
      <FeaturedTitle>Deadbeat Spotlight</FeaturedTitle>
      <FeaturedParagraph>
        Meet some of our least deserving people
      </FeaturedParagraph>
      {mobileMenu ? (
        <CardGroup>
          {featuredCards.map((card) => (
            <MainCard key={card.id} bgImage={card.mainImage}>
              <CardDetails>
                <CardTitle>{card.title}</CardTitle>
                <CardParagraph>{card.paragraph}</CardParagraph>
                <ReadMore>Read more</ReadMore>
              </CardDetails>
            </MainCard>
          ))}
        </CardGroup>
      ) : (
        <CardGroup>
          <MainCard bgImage={'/gambling'}>
            <CardDetails>
              <CardTitle>{mainCard.title}</CardTitle>
              <CardParagraph>{mainCard.paragraph}</CardParagraph>
              <ReadMore>Read more</ReadMore>
            </CardDetails>
          </MainCard>
          {featuredCards.slice(1).map((card) => (
            <Card key={card.id}>
              <CardImageWrapper>
                <Image
                  src={card.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </CardImageWrapper>
              <CardDetails>
                <CardTitle>{card.title}</CardTitle>
                <CardParagraph>{card.paragraph}</CardParagraph>
                <ReadMore>Read more</ReadMore>
              </CardDetails>
            </Card>
          ))}
        </CardGroup>
      )}
    </FeaturedComponent>
  );
}
