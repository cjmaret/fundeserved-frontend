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
  MainCardDetails,
  MainCardImage,
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
              <MainCardDetails>
                <CardTitle>{card.title}</CardTitle>
                <CardParagraph>{card.paragraph}</CardParagraph>
                <ReadMore>Read more</ReadMore>
              </MainCardDetails>
            </MainCard>
          ))}
        </CardGroup>
      ) : (
        <CardGroup>
          <MainCard>
            <MainCardDetails>
              <CardTitle>{mainCard.title}</CardTitle>
              <CardParagraph>{mainCard.paragraph}</CardParagraph>
              <ReadMore>Read more</ReadMore>
            </MainCardDetails>
            <MainCardImage src={mainCard.image} alt="" />
          </MainCard>
          {featuredCards.slice(1).map((card) => (
            <Card key={card.id}>
              <CardImageWrapper>
                <img src={card.image} alt="" className="card-image" />
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
